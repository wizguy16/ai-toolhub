import type { ClickSource } from "./clickSource";

/** High-level vertical for analytics (geo/category experiments later). */
export type ToolCategory =
  | "ai"
  | "finance"
  | "productivity"
  | "development"
  | "credit"
  | "project-management"
  | "search"
  | "payments"
  | "other";

type ToolEntry = {
  name: string;
  affiliate: string;
  category: ToolCategory;
};

/**
 * Central affiliate registry. All outbound monetized tool links should resolve
 * through `/api/click` using these ids — do not link directly to `affiliate` URLs in UI.
 */
export const tools = {
  jasper: {
    name: "Jasper",
    affiliate: "https://www.jasper.ai/?ref=yourid",
    category: "ai",
  },
  copyai: {
    name: "Copy.ai",
    affiliate: "https://www.copy.ai/?via=yourid",
    category: "ai",
  },
  writesonic: {
    name: "Writesonic",
    affiliate: "https://writesonic.com/?ref=yourid",
    category: "ai",
  },
  ramp: {
    name: "Ramp",
    affiliate: "https://ramp.com/?ref=yourid",
    category: "finance",
  },
  raycast: {
    name: "Raycast",
    affiliate: "https://www.raycast.com/?via=yourid",
    category: "productivity",
  },
  supabase: {
    name: "Supabase",
    affiliate: "https://supabase.com/?ref=yourid",
    category: "development",
  },
  midjourney: {
    name: "Midjourney",
    affiliate: "https://www.midjourney.com/?ref=yourid",
    category: "ai",
  },
  notion: {
    name: "Notion",
    affiliate: "https://www.notion.so/?ref=yourid",
    category: "productivity",
  },
  perplexity: {
    name: "Perplexity AI",
    affiliate: "https://www.perplexity.ai/?ref=yourid",
    category: "search",
  },
  stripe: {
    name: "Stripe",
    affiliate: "https://stripe.com/?ref=yourid",
    category: "payments",
  },
  creditstrong: {
    name: "Credit Strong",
    affiliate: "https://creditstrong.com/?ref=yourid",
    category: "credit",
  },
  self: {
    name: "Self",
    affiliate: "https://self.inc/?ref=yourid",
    category: "credit",
  },
  kickoff: {
    name: "Kickoff",
    affiliate: "https://kickoff.com/?ref=yourid",
    category: "credit",
  },
  linear: {
    name: "Linear",
    affiliate: "https://linear.app/?via=yourid",
    category: "project-management",
  },
  asana: {
    name: "Asana",
    affiliate: "https://asana.com/?ref=yourid",
    category: "project-management",
  },
  monday: {
    name: "Monday.com",
    affiliate: "https://monday.com/?ref=yourid",
    category: "project-management",
  },
} as const satisfies Record<string, ToolEntry>;

export type ToolId = keyof typeof tools;

/** Slot id for `pos=` — lowercase, digits, hyphens only; max 32 chars for stable dashboards. */
export function sanitizeClickPos(input?: string): string | undefined {
  if (!input) return undefined;
  const s = input.trim().toLowerCase().slice(0, 32);
  return /^[a-z0-9-]+$/.test(s) ? s : undefined;
}

export function affiliateClickHref(
  tool: ToolId,
  source?: ClickSource,
  pos?: string,
): string {
  const params = new URLSearchParams({ tool });
  if (source) params.set("source", source);
  const p = sanitizeClickPos(pos);
  if (p) params.set("pos", p);
  return `/api/click?${params.toString()}`;
}
