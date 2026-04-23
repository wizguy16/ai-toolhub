"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ClickSource } from "@/lib/clickSource";
import { getSessionId } from "@/lib/sessionId";
import { affiliateClickHref, type ToolId } from "@/lib/tools";

const DEDUPE_MS = 600;

function appendSessionId(href: string): string {
  const sid = getSessionId();
  if (!sid) return href;
  const u = new URL(href, "http://localhost");
  u.searchParams.set("sid", sid);
  return `${u.pathname}${u.search}`;
}

function sendIntentBeacon(
  tool: ToolId,
  source: ClickSource | undefined,
  pos: string | undefined,
) {
  try {
    if (typeof navigator === "undefined" || !navigator.sendBeacon) return;
    try {
      const payload = JSON.stringify({
        tool,
        source: source ?? null,
        pos: pos ?? null,
        t: Date.now(),
      });
      navigator.sendBeacon(
        "/api/intent",
        new Blob([payload], { type: "application/json" }),
      );
    } catch {
      /* ignore */
    }
  } catch {
    /* ignore — never block navigation */
  }
}

/** Shared anchor props for `/api/click` links: deduped intent log + security attrs. */
export function useAffiliateLinkProps(
  tool: ToolId,
  source?: ClickSource,
  pos?: string,
  linkTitle?: string,
) {
  const locked = useRef(false);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Session id only exists in the browser; defer `sid` until after hydration to match SSR HTML. */
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const baseHref = useMemo(
    () => affiliateClickHref(tool, source, pos),
    [tool, source, pos],
  );

  const href = hydrated ? appendSessionId(baseHref) : baseHref;

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (locked.current) {
        e.preventDefault();
        return;
      }
      locked.current = true;
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
      unlockTimer.current = setTimeout(() => {
        locked.current = false;
        unlockTimer.current = null;
      }, DEDUPE_MS);

      sendIntentBeacon(tool, source, pos);
    },
    [tool, source, pos],
  );

  return {
    href,
    target: "_blank" as const,
    rel: "noopener noreferrer sponsored" as const,
    onClick,
    ...(linkTitle ? ({ title: linkTitle } as const) : {}),
  };
}
