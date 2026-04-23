import type { AffiliateId } from "@/lib/affiliates";

/** Highlighted “editor’s choice” strip after the intro. */
export type ArticleTopPick = {
  toolId: AffiliateId;
  name: string;
  description: string;
  benefits: readonly [string, string, string];
  ctaKind: "get-started" | "view-pricing";
};

export type ComparisonTableData = {
  headers: string[];
  rows: string[][];
  /** When set (same length as `rows`), Action column cells link via `AffiliateButton` */
  rowAffiliateIds?: AffiliateId[];
};

export type ToolReview = {
  name: string;
  /** Optional headline suffix, e.g. "The Powerhouse for Development" */
  headline?: string;
  description: string;
  pros: string[];
  cons: string[];
  cta: string;
  affiliateLinkPlaceholder: string;
  /** Resolved affiliate program id; overrides name-based map when set */
  affiliateKey?: AffiliateId;
  /** Optional — show stars + label when present */
  rating?: string;
  /** Optional pill, e.g. "BEST FOR TECH TEAMS" */
  badge?: string;
  /** Optional hero screenshot (remote URL allowed via next.config) */
  imageSrc?: string;
  /** Scorecard 0–100 */
  scoreEase?: number;
  scoreFeatures?: number;
  scoreValue?: number;
  /** 1–2 sentence recap shown above the inline affiliate CTA. */
  conversionSummary?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ArticleContent = {
  title: string;
  intro: string;
  topPick: ArticleTopPick;
  /** Shown next to the label in the article header (e.g. “Updated Apr 2026”). */
  updatedLabel?: string;
  /** When set, shows a funnel link to `/recommend` with this search query. */
  recommendQuery?: string;
  comparisonTable: ComparisonTableData;
  reviews: ToolReview[];
  faq: FaqItem[];
  verdict: string;
};
