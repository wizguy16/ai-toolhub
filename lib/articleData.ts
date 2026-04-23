import type { ArticleContent } from "@/components/article/types";

/** Local hero art for article pages (matches `/public/images`). */
const ARTICLE_IMG_CREDIT_BUILDER = "/images/credit_builder.jpg";
const ARTICLE_IMG_MARKETING = "/images/marketing.jpg";
const ARTICLE_IMG_MARKETING_2 = "/images/marketing2.jpg";

/** Long-form credit builder guide (editorial layout + in-body CTAs). */
export const fixCreditFastArticle: ArticleContent = {
  format: "editorial",
  title:
    "How to Fix Your Credit Fast (Best Tools That Actually Work in 2026)",
  subtitle:
    "What moves your score, three tools that fit most budgets, and realistic timelines—without the hype.",
  authorLine: "MyStackTools Editorial Team",
  categoryLabel: "Credit & finance",
  updatedLabel: "Updated Apr 2026",
  recommendQuery: "fix credit fast and improve credit score",
  metaDescription:
    "Learn what actually improves your credit score fast, compare Credit Strong, Self, and Kikoff, and use tracked links to get started with a plan you can stick to.",
};

/** Long-form AI writing guide for marketers (editorial layout + in-body CTAs). */
export const aiWritingToolsArticle: ArticleContent = {
  format: "editorial",
  title: "Best AI Writing Tools for Marketing (Tested & Ranked for 2026)",
  subtitle:
    "Jasper, Copy.ai, and Writesonic—what actually matters for marketing output, speed, and conversion.",
  authorLine: "MyStackTools Editorial Team",
  categoryLabel: "AI & marketing",
  updatedLabel: "Updated Apr 2026",
  recommendQuery: "best AI writing tools for marketing and copywriting",
  metaDescription:
    "Compare Jasper, Copy.ai, and Writesonic for marketing: output quality, templates, speed, and how to pick the right AI writer for your team in 2026.",
};

/**
 * Small-team PM guide (editorial). Still exported as `pmToolsArticle` for
 * `sampleArticle` / legacy imports.
 */
export const pmToolsArticle: ArticleContent = {
  format: "editorial",
  title: "Best Project Management Tools for Small Teams (2026 Guide)",
  subtitle:
    "Notion, Asana, and Monday.com—what to look for, who each fits, and how to avoid the usual rollout mistakes.",
  authorLine: "MyStackTools Editorial Team",
  categoryLabel: "Project management",
  updatedLabel: "Updated Apr 2026",
  recommendQuery: "best project management tools for small teams",
  metaDescription:
    "Compare Notion, Asana, and Monday.com for small teams: ease of use, structure vs flexibility, visual workflows, and tracked links to get started.",
};

const articlesBySlug: Record<string, ArticleContent> = {
  "fix-credit-fast-2026": fixCreditFastArticle,
  "best-ai-writing-tools-marketing": aiWritingToolsArticle,
  "pm-tools": pmToolsArticle,
};

export type ArticleListItem = {
  slug: string;
  title: string;
  excerpt: string;
  /** Hero / card image under `/public`. */
  coverImage: string;
  category: string;
  /** Large featured card only — short, benefit-led line. */
  featuredLead?: string;
};

export const articleList: ArticleListItem[] = [
  {
    slug: "fix-credit-fast-2026",
    title: fixCreditFastArticle.title,
    excerpt:
      "Payment history, utilization, and credit mix—plus Credit Strong, Self, and Kikoff explained with clear next steps.",
    featuredLead:
      "A practical guide to building positive payment history with tools built for real budgets.",
    coverImage: ARTICLE_IMG_CREDIT_BUILDER,
    category: "Credit & finance",
  },
  {
    slug: "best-ai-writing-tools-marketing",
    title: aiWritingToolsArticle.title,
    excerpt:
      "What makes a strong marketing AI writer, plus Jasper vs Copy.ai vs Writesonic—with realistic expectations and tracked CTAs.",
    coverImage: ARTICLE_IMG_MARKETING,
    category: "AI & marketing",
  },
  {
    slug: "pm-tools",
    title: pmToolsArticle.title,
    excerpt:
      "One central system beats scattered notes—here’s how to choose Notion vs Asana vs Monday.com without overcomplicating.",
    coverImage: ARTICLE_IMG_MARKETING_2,
    category: "Project management",
  },
];

export function getArticleBySlug(slug: string): ArticleContent | null {
  return articlesBySlug[slug] ?? null;
}
