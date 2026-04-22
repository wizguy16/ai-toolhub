import { NextResponse } from "next/server";

const MAX_BYTES = 4096;
const EVENT_VERSION = 1 as const;

function normalizeCountry(req: Request): string {
  const raw = (req.headers.get("x-vercel-ip-country") ?? "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(raw) ? raw : "unknown";
}

function logTimestamps() {
  const ts = Date.now();
  return { ts, tsISO: new Date(ts).toISOString() };
}

/** Lightweight client intent beacons (e.g. `navigator.sendBeacon`) before navigation. */
export async function POST(req: Request) {
  const ct = req.headers.get("content-type") ?? "";
  if (!ct.toLowerCase().includes("application/json")) {
    return new NextResponse(null, { status: 204 });
  }

  const raw = await req.text();
  if (raw.length > MAX_BYTES) {
    return new NextResponse(null, { status: 413 });
  }

  const country = normalizeCountry(req);

  try {
    const body = JSON.parse(raw) as Record<string, unknown>;
    const { tool, source, pos } = body;
    const allowed = { tool, source, pos };
    const { ts, tsISO } = logTimestamps();
    console.log(
      JSON.stringify({
        type: "affiliate_intent_beacon",
        requestId: crypto.randomUUID(),
        eventVersion: EVENT_VERSION,
        country,
        tool: String(allowed.tool ?? "").slice(0, 64),
        source:
          allowed.source === null || allowed.source === undefined
            ? null
            : String(allowed.source).slice(0, 64),
        pos:
          allowed.pos === null || allowed.pos === undefined
            ? null
            : String(allowed.pos).slice(0, 32),
        t: typeof body.t === "number" ? body.t : null,
        ts,
        tsISO,
      }),
    );
  } catch {
    /* ignore malformed beacons */
  }
  return new NextResponse(null, { status: 204 });
}
