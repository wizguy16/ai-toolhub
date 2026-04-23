import { NextResponse } from "next/server";
import { parseClickSource } from "@/lib/clickSource";
import { sanitizeClickPos, tools, type ToolId } from "@/lib/tools";

const EVENT_VERSION = 1 as const;

const REDIRECT_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Vary: "User-Agent, X-Vercel-IP-Country",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
} as const;

function logTimestamps() {
  const ts = Date.now();
  return { ts, tsISO: new Date(ts).toISOString() };
}

function normalizeCountry(req: Request): string {
  const raw = (req.headers.get("x-vercel-ip-country") ?? "").trim().toUpperCase();
  return /^[A-Z]{2}$/.test(raw) ? raw : "unknown";
}

function redirect302(url: string | URL) {
  return NextResponse.redirect(url, {
    status: 302,
    headers: REDIRECT_HEADERS,
  });
}

function isToolId(value: string): value is ToolId {
  return value in tools;
}

function safeAffiliateUrl(raw: string): URL | null {
  try {
    const u = new URL(raw);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u;
  } catch {
    return null;
  }
}

function getClientIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) {
    const first = xf.split(",")[0]?.trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip")?.trim() || "anon";
}

/** Small stable fingerprint for rate keys (not crypto). */
function hashUa(ua: string): string {
  let h = 0;
  for (let i = 0; i < ua.length; i++) {
    h = (Math.imul(31, h) + ua.charCodeAt(i)) | 0;
  }
  return (h >>> 0).toString(16);
}

function isLikelyBot(uaLower: string): boolean {
  return /(bot|crawl|spider|preview|facebookexternalhit|slackbot|discordbot|whatsapp|telegram)/i.test(
    uaLower,
  );
}

const recentClicks = new Map<string, number>();
const botLogThrottle = new Map<string, number>();
const sidToolSeen = new Set<string>();

function isBurstLimited(key: string, windowMs = 500): boolean {
  const now = Date.now();
  const last = recentClicks.get(key);
  if (last === undefined) {
    recentClicks.set(key, now);
    if (recentClicks.size > 20_000) recentClicks.clear();
    return false;
  }
  const limited = now - last < windowMs;
  recentClicks.set(key, now);
  if (recentClicks.size > 20_000) recentClicks.clear();
  return limited;
}

/** True = skip bot log line (still redirect). */
function shouldThrottleBotLog(key: string, windowMs = 2000): boolean {
  const now = Date.now();
  const last = botLogThrottle.get(key);
  if (last === undefined) {
    botLogThrottle.set(key, now);
    if (botLogThrottle.size > 10_000) botLogThrottle.clear();
    return false;
  }
  const skip = now - last < windowMs;
  botLogThrottle.set(key, now);
  if (botLogThrottle.size > 10_000) botLogThrottle.clear();
  return skip;
}

function recordFirstClick(cohortKey: string): boolean {
  const first = !sidToolSeen.has(cohortKey);
  sidToolSeen.add(cohortKey);
  if (sidToolSeen.size > 50_000) {
    const it = sidToolSeen.keys();
    for (let i = 0; i < 5000; i++) {
      const k = it.next().value;
      if (k === undefined) break;
      sidToolSeen.delete(k);
    }
  }
  return first;
}

function appendPartnerUtms(
  url: URL,
  normalizedSource: ReturnType<typeof parseClickSource>,
): void {
  if (!url.searchParams.has("utm_source")) {
    url.searchParams.set("utm_source", "mystacktools");
  }
  if (!url.searchParams.has("utm_medium")) {
    url.searchParams.set("utm_medium", "affiliate");
  }
  if (normalizedSource && !url.searchParams.has("utm_content")) {
    url.searchParams.set("utm_content", normalizedSource);
  }
}

function sourceRawForLog(
  raw: string | undefined,
  normalized: ReturnType<typeof parseClickSource>,
): string | null {
  if (raw == null || raw === "") return null;
  if (normalized === undefined) return raw.slice(0, 200);
  if (raw !== normalized) return raw.slice(0, 200);
  return null;
}

function intentDelayMs(): number {
  return 40 + Math.floor(Math.random() * 20);
}

function burstDelayMs(): number {
  return 5 + Math.floor(Math.random() * 11);
}

export async function GET(req: Request) {
  const requestId = crypto.randomUUID();
  const country = normalizeCountry(req);

  const { searchParams } = new URL(req.url);
  const raw = searchParams.get("tool");
  const toolRaw = (raw ?? "").trim().slice(0, 128);
  const toolCandidate = toolRaw.slice(0, 64).trim().toLowerCase();

  if (!toolCandidate) {
    const { ts, tsISO } = logTimestamps();
    console.warn(
      JSON.stringify({
        type: "affiliate_click_bad_tool",
        requestId,
        eventVersion: EVENT_VERSION,
        country,
        reason: "empty_tool",
        toolRaw: toolRaw.length ? toolRaw.slice(0, 64) : null,
        hasSid: false,
        ts,
        tsISO,
      }),
    );
    return redirect302(new URL("/", req.url));
  }

  const tool = toolCandidate;
  const rawSource = searchParams.get("source")?.trim().slice(0, 128);
  const normalizedSource = parseClickSource(rawSource);
  const sourceBucket = (normalizedSource ?? "unknown").slice(0, 64);
  const sourceSafe = sourceBucket.slice(0, 64);
  const rawPos = searchParams.get("pos")?.trim().slice(0, 128);
  const posParsed = sanitizeClickPos(rawPos);
  const posSafe = posParsed ? posParsed.slice(0, 32) : null;
  const sessionId =
    searchParams.get("sid")?.trim().slice(0, 128) || undefined;
  const hasSid = Boolean(sessionId);
  const fallback = new URL("/tools", req.url);

  if (!isToolId(tool)) {
    const { ts, tsISO } = logTimestamps();
    console.warn(
      JSON.stringify({
        type: "affiliate_click_bad_tool",
        requestId,
        eventVersion: EVENT_VERSION,
        country,
        reason: "unknown_tool",
        toolRaw: toolRaw.slice(0, 64),
        hasSid,
        ts,
        tsISO,
      }),
    );
    return redirect302(new URL("/", req.url));
  }

  const ip = getClientIp(req).slice(0, 64);
  const ua = req.headers.get("user-agent") ?? "";
  const uaLower = ua.toLowerCase();
  const uaHash = hashUa(ua);
  const rateKey = `${ip}|${uaHash}|${tool}|${normalizedSource ?? ""}|${posSafe ?? ""}|${sessionId ?? "nosid"}`;

  const toolData = tools[tool];
  const category = toolData.category;
  const affiliateUrl = safeAffiliateUrl(toolData.affiliate);
  if (!affiliateUrl) {
    const clickId = crypto.randomUUID();
    const { ts, tsISO } = logTimestamps();
    console.error(
      JSON.stringify({
        type: "affiliate_click_invalid_url",
        requestId,
        eventVersion: EVENT_VERSION,
        country,
        clickId,
        toolId: tool,
        category,
        affiliate: toolData.affiliate.slice(0, 500),
        source: sourceSafe,
        pos: posSafe,
        sid: sessionId ?? null,
        hasSid,
        ts,
        tsISO,
      }),
    );
    return redirect302(fallback);
  }

  appendPartnerUtms(affiliateUrl, normalizedSource);

  if (isLikelyBot(uaLower)) {
    const botLogKey = `${uaHash}|${tool}`;
    if (!shouldThrottleBotLog(botLogKey)) {
      const { ts, tsISO } = logTimestamps();
      console.log(
        JSON.stringify({
          type: "affiliate_click_ignored_bot",
          requestId,
          eventVersion: EVENT_VERSION,
          country,
          toolId: tool,
          category,
          ua: uaLower.slice(0, 120),
          hasSid,
          ts,
          tsISO,
        }),
      );
    }
    return redirect302(affiliateUrl);
  }

  const burst = isBurstLimited(rateKey);
  const sourceRaw = sourceRawForLog(rawSource, normalizedSource);

  const sidForCohort = (sessionId ?? "none").slice(0, 128);
  const cohortKey = `${sidForCohort}|${tool}`;
  const firstClick = recordFirstClick(cohortKey);

  if (burst) {
    const { ts, tsISO } = logTimestamps();
    console.warn(
      JSON.stringify({
        type: "affiliate_click_rate_limited",
        requestId,
        eventVersion: EVENT_VERSION,
        country,
        toolId: tool,
        category,
        source: sourceSafe,
        sourceRaw,
        pos: posSafe,
        sid: sessionId ?? null,
        hasSid,
        firstClick,
        ts,
        tsISO,
      }),
    );
    await new Promise<void>((resolve) =>
      setTimeout(resolve, burstDelayMs()),
    );
    try {
      return redirect302(affiliateUrl);
    } catch (err) {
      const { ts: tsE, tsISO: tsISOE } = logTimestamps();
      console.error(
        JSON.stringify({
          type: "affiliate_click_redirect_failed",
          requestId,
          eventVersion: EVENT_VERSION,
          country,
          toolId: tool,
          category,
          hasSid,
          message: (err instanceof Error ? err.message : String(err)).slice(
            0,
            500,
          ),
          ts: tsE,
          tsISO: tsISOE,
        }),
      );
      return redirect302(fallback);
    }
  }

  const clickId = crypto.randomUUID();
  const { ts, tsISO } = logTimestamps();

  console.log(
    JSON.stringify({
      type: "affiliate_click",
      requestId,
      eventVersion: EVENT_VERSION,
      country,
      clickId,
      toolId: tool,
      category,
      toolName: toolData.name.slice(0, 128),
      source: sourceSafe,
      sourceKnown: normalizedSource ?? null,
      sourceRaw,
      pos: posSafe,
      sid: sessionId ?? null,
      hasSid,
      firstClick,
      ts,
      tsISO,
    }),
  );

  await new Promise<void>((resolve) => setTimeout(resolve, intentDelayMs()));

  try {
    return redirect302(affiliateUrl);
  } catch (err) {
    const { ts: tsE, tsISO: tsISOE } = logTimestamps();
    console.error(
      JSON.stringify({
        type: "affiliate_click_redirect_failed",
        requestId,
        eventVersion: EVENT_VERSION,
        country,
        clickId,
        toolId: tool,
        category,
        hasSid,
        message: (err instanceof Error ? err.message : String(err)).slice(
          0,
          500,
        ),
        ts: tsE,
        tsISO: tsISOE,
      }),
    );
    return redirect302(fallback);
  }
}
