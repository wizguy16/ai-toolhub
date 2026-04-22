import type { ClickSource } from "./clickSource";
import { affiliateClickHref, type ToolId } from "./tools";

/**
 * Server-safe href + `rel` + `target` for `/api/click` links.
 * Client components should append `sid` via `useAffiliateLinkProps` or `<AffiliateAnchor />`.
 */
export function getAffiliateLinkProps(
  tool: ToolId,
  source?: ClickSource,
  pos?: string,
) {
  return {
    href: affiliateClickHref(tool, source, pos),
    rel: "noopener noreferrer sponsored" as const,
    target: "_blank" as const,
  };
}
