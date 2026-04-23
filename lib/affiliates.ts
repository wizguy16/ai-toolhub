import { tools, type ToolId } from "./tools";

type AffiliateEntry = { name: string; url: string };

/** Derived view for legacy `url` field shape (canonical URLs live in `tools`). */
export const affiliates = Object.fromEntries(
  (Object.keys(tools) as ToolId[]).map((id) => [
    id,
    { name: tools[id].name, url: tools[id].affiliate },
  ]),
) as Record<ToolId, AffiliateEntry>;

export type AffiliateId = ToolId;

/** Map review `name` (from AI or CMS) to a tool id when `affiliateKey` is omitted */
export const affiliateToolMapByName: Partial<Record<string, AffiliateId>> = {
  "Credit Strong": "creditstrong",
  Self: "self",
  Kickoff: "kickoff",
  "Copy.ai": "copyai",
  Writesonic: "writesonic",
  Linear: "linear",
  Asana: "asana",
  "Monday.com": "monday",
  Jasper: "jasper",
  Ramp: "ramp",
  Raycast: "raycast",
  Supabase: "supabase",
  Midjourney: "midjourney",
  Notion: "notion",
  "Perplexity AI": "perplexity",
  Stripe: "stripe",
};
