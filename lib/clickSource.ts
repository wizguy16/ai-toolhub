/** Known `source=` values only — keeps analytics and partner UTMs consistent. */
export const CLICK_SOURCES = [
  "tools-browse",
  "tools-top-month",
  "sidebar-top-tools",
  "sidebar-best-deals",
  "article-review",
  "article-comparison",
] as const;

export type ClickSource = (typeof CLICK_SOURCES)[number];

const SOURCE_SET = new Set<string>(CLICK_SOURCES);

export function parseClickSource(
  raw: string | null | undefined,
): ClickSource | undefined {
  const s = raw?.trim();
  if (!s || !SOURCE_SET.has(s)) return undefined;
  return s as ClickSource;
}
