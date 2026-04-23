/** Known `source=` values only — keeps analytics and partner UTMs consistent. */
export const CLICK_SOURCES = [
  /** Homepage price comparison rows and related CTAs. */
  "homepage",
  "home-top-picks",
  "tools-browse",
  "tools-top-month",
  "sidebar-top-tools",
  "sidebar-best-deals",
  /** Article body CTAs (top pick, inline reviews, comparison table). */
  "article",
  /** Long-form editorial article inline CTAs. */
  "article-editorial",
  "article-review",
  "article-comparison",
  "recommend-top",
  "recommend-alt",
  "recommend-learn-more",
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
