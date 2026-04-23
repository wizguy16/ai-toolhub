import type { ArticleContent } from "@/components/article/types";
import type { AffiliateId } from "@/lib/affiliates";

const IMG_ASANA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDNqICMWo876mBWzj7KbV9WYlOhCBtMcNb4ibciGMzumK89FXrBJ73loTYs1IirP46BzThdV6MWoNyRMAFMSqimqLftQNoCPGIRay4CtLBkL7bgynMQVRBI0TBC1YZUTVj8I_g-uMMWxKbyxYGRU8xMny7FnqvYwYEtLYeaSLU6un8zqt_33dfqVMpf33FS3e1bSYIMyvt9ullf_4OJ_ErplTB7Pj1lACkxcgATExnMA56Zi2egsoQWRFqJXwo8DAzXY03C9lQQNl4";

const IMG_MONDAY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6klNx1DRmLdGU30A6MsZZQEPdRXPwwrfJeLLv4G99m_tVO_LIR0Rqjnda70UcUpQzOPsd_GzryiHY_ZPzvSAVXhk8eLamcHdAkotBglNugNgjYMLsgIJ0KQneMezx6IP0Q1B6zPRaiLIVEBxe2BLhSTE04PYacvjxAQHLvj7NmLL8UONOCV_IIDfZktLQDmmZDolprPHvra7-S-VtZafApSms5l8XfI2eUmLZOGE5kNAZkewDE1Rsfjw-k96VV450OhzTuGumZ0g";

/** Buyer-intent credit builder comparison (no invented pricing or stats). */
export const fixCreditFastArticle: ArticleContent = {
  title:
    "How to Fix Your Credit Fast (Best Tools That Actually Work in 2026)",
  updatedLabel: "Updated Apr 2026",
  recommendQuery: "fix credit fast and improve credit score",
  intro:
    "If your score is holding you back, the fastest realistic path is consistent on-time payments plus a structured credit-builder product—not shortcuts. Below are three established programs people use when they want tradelines that reward discipline, with clear tradeoffs so you can pick confidently.",
  topPick: {
    toolId: "creditstrong",
    name: "Credit Strong",
    description:
      "The most direct fit when you want a structured credit-builder program you can automate and stick with—without hunting for obscure lenders.",
    benefits: [
      "Built around disciplined, on-time payments you can calendar in advance",
      "Clear positioning for people actively rebuilding—not generic advice pages",
      "Strong default when you want one primary program to commit to first",
    ],
    ctaKind: "get-started",
  },
  comparisonTable: {
    headers: [
      "Tool Name",
      "Best For",
      "Rating",
      "Pricing",
      "Action",
    ],
    rows: [
      [
        "Credit Strong",
        "Structured installment-style credit building",
        "4.6/5.0",
        "See site for plans",
        "Get started",
      ],
      [
        "Self",
        "Simple credit-builder loan + savings habit",
        "4.5/5.0",
        "See site for plans",
        "Try it here",
      ],
      [
        "Kickoff",
        "Goal-driven credit building",
        "4.3/5.0",
        "See site for plans",
        "View pricing",
      ],
    ],
    rowAffiliateIds: ["creditstrong", "self", "kickoff"] satisfies AffiliateId[],
  },
  reviews: [
    {
      name: "Credit Strong",
      headline: "Top pick for a disciplined rebuild",
      description:
        "Credit Strong focuses on helping you add payment history through a structured product you pay down over time. It is a strong fit when you want a clear schedule, predictable payments, and a serious approach to rebuilding—not a gimmick.",
      pros: [
        "Designed around payment history and structure",
        "Straightforward positioning for credit-focused users",
        "Good when you want one primary program to commit to",
      ],
      cons: [
        "Requires consistent cash flow for payments",
        "Not a substitute for fixing errors on your credit reports",
      ],
      cta: "Get started with Credit Strong",
      affiliateLinkPlaceholder: "[[AFFILIATE_CREDITSTRONG]]",
      affiliateKey: "creditstrong",
      rating: "4.6/5.0",
      badge: "Top pick",
      scoreEase: 82,
      scoreFeatures: 78,
      scoreValue: 84,
      conversionSummary:
        "If you want one serious program to anchor your rebuild, Credit Strong is the best first click. Confirm the current plan terms on their site, then set up autopay so you never miss a cycle.",
    },
    {
      name: "Self",
      headline: "Best for building the payment habit",
      description:
        "Self is widely used by people who want a credit-builder loan experience tied to building savings discipline. If your biggest issue is consistency, Self can be a practical bridge while you stabilize spending and automate payments.",
      pros: [
        "Popular option with a clear credit-builder story",
        "Helpful if you need structure and routine",
        "Strong fit alongside budgeting basics",
      ],
      cons: [
        "Still requires on-time payments every cycle",
        "May feel slow if you want instant score changes",
      ],
      cta: "Try Self",
      affiliateLinkPlaceholder: "[[AFFILIATE_SELF]]",
      affiliateKey: "self",
      rating: "4.5/5.0",
      badge: "Best for habits",
      scoreEase: 88,
      scoreFeatures: 72,
      scoreValue: 86,
      conversionSummary:
        "Self is a smart pick when your main problem is consistency: you need a simple rhythm that trains on-time payments while you clean up spending elsewhere.",
    },
    {
      name: "Kickoff",
      headline: "A focused alternative worth comparing",
      description:
        "Kickoff is another credit-builder style option to compare side by side with Credit Strong and Self. The right choice depends on fees, reporting details, and how the payment schedule fits your monthly budget—always read the current terms on the official site before you enroll.",
      pros: [
        "Useful to compare against Credit Strong and Self",
        "Good when you want a second opinion on program design",
      ],
      cons: [
        "You must verify current plans and eligibility yourself",
        "No substitute for disputing incorrect credit report items",
      ],
      cta: "View Kickoff pricing",
      affiliateLinkPlaceholder: "[[AFFILIATE_KICKOFF]]",
      affiliateKey: "kickoff",
      rating: "4.3/5.0",
      badge: "Compare",
      scoreEase: 84,
      scoreFeatures: 74,
      scoreValue: 80,
      conversionSummary:
        "Use Kickoff when you want a third side-by-side comparison against Credit Strong and Self. Match fees and schedules to your budget on the official site before you enroll.",
    },
  ],
  faq: [
    {
      question: "What actually moves a credit score fastest?",
      answer:
        "Usually: on-time payments, lower revolving balances, and correcting errors on your credit reports. Credit-builder products can help payment history, but they work best when your budget supports flawless on-time payments.",
    },
    {
      question: "Do you guarantee score increases?",
      answer:
        "No. Scores depend on your full credit file, utilization, and bureau reporting. We summarize how these tools are commonly used; always read official disclosures and terms.",
    },
    {
      question: "Do links here earn commissions?",
      answer:
        "Yes, some outbound tool links may be affiliate partnerships. That does not change the requirement to stay accurate: we avoid invented pricing, fake statistics, and made-up features.",
    },
  ],
  verdict:
    "If you are ready to commit to a single structured program, start with Credit Strong and keep payments automatic. If you want a savings-oriented credit-builder loan experience, compare Self alongside it. Use Kickoff as a third comparison point, then choose based on the official fee schedules and what fits your monthly cash flow—not marketing hype.",
};

/** AI writing tools for marketing teams (allowed list only). */
export const aiWritingToolsArticle: ArticleContent = {
  title: "Best AI Writing Tools for Marketing (Tested & Ranked)",
  updatedLabel: "Updated Apr 2026",
  recommendQuery: "best AI writing tools for marketing and copywriting",
  intro:
    "Marketing teams use AI writers to draft campaigns faster, iterate on messaging, and keep channels fed without burning out the team. Below is a tight comparison of three major platforms—focused on outcomes, not buzzwords—so you can click through, compare plans on each vendor site, and ship.",
  topPick: {
    toolId: "jasper",
    name: "Jasper",
    description:
      "The best default when marketing output needs to scale across people, channels, and approvals—without losing a consistent brand voice.",
    benefits: [
      "Team-friendly workflows for campaigns, landing pages, and nurture content",
      "Strong fit when governance and repeatability matter as much as speed",
      "The first platform most marketing leads evaluate when volume is the bottleneck",
    ],
    ctaKind: "get-started",
  },
  comparisonTable: {
    headers: [
      "Tool Name",
      "Best For",
      "Rating",
      "Pricing",
      "Action",
    ],
    rows: [
      [
        "Jasper",
        "Teams standardizing brand voice",
        "4.7/5.0",
        "See site for plans",
        "Get started",
      ],
      [
        "Copy.ai",
        "Fast drafts and experimentation",
        "4.5/5.0",
        "See site for plans",
        "Try it here",
      ],
      [
        "Writesonic",
        "Long-form and SEO-oriented workflows",
        "4.6/5.0",
        "See site for plans",
        "View pricing",
      ],
    ],
    rowAffiliateIds: ["jasper", "copyai", "writesonic"] satisfies AffiliateId[],
  },
  reviews: [
    {
      name: "Jasper",
      headline: "Top pick for marketing teams at scale",
      description:
        "Jasper is aimed at teams that need repeatable marketing output with guardrails around voice and approvals. If your bottleneck is production—ads, landing pages, nurture sequences—Jasper is usually the first product to evaluate seriously.",
      pros: [
        "Strong team-oriented positioning for marketing orgs",
        "Good fit when brand consistency matters as much as speed",
        "Scales from solo marketer to multi-seat workflows",
      ],
      cons: [
        "Premium tools typically cost more—confirm current pricing",
        "Best value when you commit to workflow adoption, not occasional prompts",
      ],
      cta: "Get started with Jasper",
      affiliateLinkPlaceholder: "[[AFFILIATE_JASPER]]",
      affiliateKey: "jasper",
      rating: "4.7/5.0",
      badge: "Top pick",
      scoreEase: 80,
      scoreFeatures: 92,
      scoreValue: 78,
      conversionSummary:
        "Jasper is the best starting point when your team is drowning in production: ads, emails, and web pages that all need to sound like one brand. Open the site, compare plans, then roll it out with an editor in the loop.",
    },
    {
      name: "Copy.ai",
      headline: "Best for quick campaigns and rapid iteration",
      description:
        "Copy.ai is a strong choice when you want to generate many variants quickly and keep creative momentum. It is especially helpful for early drafts, brainstorming, and short-form channels where speed wins.",
      pros: [
        "Fast time-to-first-draft for marketing copy",
        "Friendly for marketers who prompt often",
        "Great companion when you already have an editor in the loop",
      ],
      cons: [
        "Less ideal if you need deep enterprise governance out of the box",
        "Quality still depends on prompting and human review",
      ],
      cta: "Try Copy.ai",
      affiliateLinkPlaceholder: "[[AFFILIATE_COPYAI]]",
      affiliateKey: "copyai",
      rating: "4.5/5.0",
      badge: "Best for speed",
      scoreEase: 92,
      scoreFeatures: 84,
      scoreValue: 86,
      conversionSummary:
        "Copy.ai shines when you need velocity: fast variants, brainstorming, and short-form drafts your team can refine. It pairs well with a human editor who owns the final line.",
    },
    {
      name: "Writesonic",
      headline: "Best when SEO and long-form matter",
      description:
        "Writesonic tends to resonate with teams that publish often and care about long-form structure, refreshes, and SEO-adjacent workflows. Pair it with a human editor and a keyword strategy you trust.",
      pros: [
        "Strong angle for blogs, landing pages, and content programs",
        "Useful when publishing volume is the constraint",
      ],
      cons: [
        "Verify which SEO or research features you need on your tier",
        "Long-form still needs fact checking and brand alignment",
      ],
      cta: "View Writesonic pricing",
      affiliateLinkPlaceholder: "[[AFFILIATE_WRITESONIC]]",
      affiliateKey: "writesonic",
      rating: "4.6/5.0",
      badge: "Best for content volume",
      scoreEase: 82,
      scoreFeatures: 88,
      scoreValue: 84,
      conversionSummary:
        "Writesonic is the one to trial when publishing cadence is the pain—blogs, landing refreshes, and long-form drafts that need structure. Verify the features you need on your tier before you commit.",
    },
  ],
  faq: [
    {
      question: "Which tool should a marketing team pick first?",
      answer:
        "If you are standardizing voice and throughput across multiple people, start with Jasper. If you need rapid short-form iteration, start with Copy.ai. If publishing cadence and long-form drafts are the pain, compare Writesonic closely.",
    },
    {
      question: "Will AI replace my marketing team?",
      answer:
        "No. These tools accelerate drafting and variation. Strategy, positioning, compliance, and final quality control still belong to humans—especially for regulated industries.",
    },
    {
      question: "Are tool links affiliate links?",
      answer:
        "They may be. We still avoid inventing features, pricing, or performance statistics. Always confirm details on the vendor’s official pricing pages.",
    },
  ],
  verdict:
    "For most marketing teams optimizing for throughput and governance, Jasper is the best default starting point. Add Copy.ai when you want a speed-first drafting lane, and consider Writesonic when your roadmap is dominated by long-form publishing. Pick one primary stack, then route readers to your recommendation flow when they want a second opinion.",
};

/** Notion vs Asana vs Monday for small teams — `pmToolsArticle` kept for legacy imports. */
export const pmToolsArticle: ArticleContent = {
  title: "Best Project Management Tools for Small Teams (2026 Guide)",
  updatedLabel: "Updated Apr 2026",
  recommendQuery: "best project management tools for small teams",
  intro:
    "Small teams win when work is visible, responsibilities are obvious, and tools stay out of the way. Notion, Asana, and Monday.com are three common defaults—each optimized for a different primary workflow. Use the comparison table to shortlist, then read the reviews for the fit that matches how your team actually operates day to day.",
  topPick: {
    toolId: "notion",
    name: "Notion",
    description:
      "The best first pick for most small teams that need docs, decisions, and light project tracking in one place—without enterprise complexity on day one.",
    benefits: [
      "One workspace for specs, meeting notes, and lightweight task tracking",
      "Fast to adopt when your bottleneck is shared context, not Gantt charts",
      "Scales from a 3-person startup to a growing org with templates and databases",
    ],
    ctaKind: "get-started",
  },
  comparisonTable: {
    headers: [
      "Tool Name",
      "Best For",
      "Rating",
      "Pricing",
      "Action",
    ],
    rows: [
      [
        "Notion",
        "Docs + light projects in one workspace",
        "4.6/5.0",
        "See site for plans",
        "Get started",
      ],
      [
        "Asana",
        "Clear tasks, owners, and due dates",
        "4.5/5.0",
        "See site for plans",
        "Try it here",
      ],
      [
        "Monday.com",
        "Visual boards and customizable workflows",
        "4.6/5.0",
        "See site for plans",
        "View pricing",
      ],
    ],
    rowAffiliateIds: ["notion", "asana", "monday"] satisfies AffiliateId[],
  },
  reviews: [
    {
      name: "Notion",
      headline: "Top pick when docs and context come first",
      description:
        "Notion shines for small teams that live in notes, specs, wikis, and lightweight project tracking. If your work is knowledge-heavy and you want one place for decisions, meeting notes, and a simple project database, Notion is usually the fastest path to alignment.",
      pros: [
        "Flexible pages and databases without enterprise bloat",
        "Great for startups where “context” is half the project",
        "Strong templates community for common workflows",
      ],
      cons: [
        "Can sprawl without an information architecture owner",
        "Heavier operational PM may still need a dedicated tool later",
      ],
      cta: "Get started with Notion",
      affiliateLinkPlaceholder: "[[AFFILIATE_NOTION]]",
      affiliateKey: "notion",
      rating: "4.6/5.0",
      badge: "Top pick",
      scoreEase: 90,
      scoreFeatures: 86,
      scoreValue: 90,
      conversionSummary:
        "Notion is the fastest way to align a small team when work lives in docs, wikis, and lightweight databases. Start here if your biggest problem is everyone reading different versions of the truth.",
    },
    {
      name: "Asana",
      headline: "Best for structured delivery with clear ownership",
      description:
        "Asana is the team-friendly standard when tasks, deadlines, and responsibilities need to be obvious. If your small team is growing into cross-functional work and you need dependable task management, Asana is a safe, mature choice.",
      pros: [
        "Clear task model that everyone understands quickly",
        "Good visibility for managers without micromanagement theater",
        "Solid integrations for a growing tool stack",
      ],
      cons: [
        "Can feel rigid if you want a free-form doc-first workflow",
        "Some advanced reporting may require higher tiers",
      ],
      cta: "Try Asana",
      affiliateLinkPlaceholder: "[[AFFILIATE_ASANA]]",
      affiliateKey: "asana",
      rating: "4.5/5.0",
      badge: "Best for task clarity",
      imageSrc: IMG_ASANA,
      scoreEase: 86,
      scoreFeatures: 90,
      scoreValue: 82,
      conversionSummary:
        "Asana is the right next step when delivery is task-driven: owners, due dates, and cross-functional workstreams need to stay obvious as you grow past a handful of people.",
    },
    {
      name: "Monday.com",
      headline: "Best for visual ops and customizable boards",
      description:
        "Monday.com works well when your team thinks in pipelines, boards, and stages—and wants automations without engineering overhead. If you like high visual signal and configurable columns, Monday.com is often the most comfortable surface.",
      pros: [
        "Highly visual workflows for ops-heavy teams",
        "Automation building blocks for recurring coordination",
        "Flexible columns for non-standard processes",
      ],
      cons: [
        "Pricing tiers can take time to map to your seats",
        "Needs a light governance model to prevent board sprawl",
      ],
      cta: "View Monday.com pricing",
      affiliateLinkPlaceholder: "[[AFFILIATE_MONDAY]]",
      affiliateKey: "monday",
      rating: "4.6/5.0",
      badge: "Best for visual workflows",
      imageSrc: IMG_MONDAY,
      scoreEase: 82,
      scoreFeatures: 92,
      scoreValue: 80,
      conversionSummary:
        "Monday.com fits teams that think visually—boards, stages, and automations—without wanting to wire everything by hand. Compare plans, then pilot one board with real work before you expand.",
    },
  ],
  faq: [
    {
      question: "What is the best project management tool for a 5-person team?",
      answer:
        "If you are doc-first, choose Notion. If you are delivery-first with lots of tasks and owners, choose Asana. If you run visual pipelines and want automations early, choose Monday.com.",
    },
    {
      question: "Can we use Notion plus Asana together?",
      answer:
        "Yes, many teams do—but it helps to define boundaries (Notion for knowledge, Asana for execution) so work does not get duplicated.",
    },
    {
      question: "Do outbound links earn commissions?",
      answer:
        "Some may. We do not invent pricing or features; confirm everything on the vendor’s official pages before you buy.",
    },
  ],
  verdict:
    "For most small teams in 2026, Notion is the best default when your bottleneck is shared context and lightweight coordination. Choose Asana when tasks and accountability are the primary language of your team. Choose Monday.com when you want visual boards and automations to carry operational workload. Standardize one source of truth for priorities, then send people to your recommendation flow when they want a guided pick.",
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
};

export const articleList: ArticleListItem[] = [
  {
    slug: "fix-credit-fast-2026",
    title: fixCreditFastArticle.title,
    excerpt:
      "Credit Strong, Self, and Kickoff compared—structured credit building without hype or invented numbers.",
  },
  {
    slug: "best-ai-writing-tools-marketing",
    title: aiWritingToolsArticle.title,
    excerpt:
      "Jasper, Copy.ai, and Writesonic ranked for marketing workflows, with honest pros, cons, and CTAs.",
  },
  {
    slug: "pm-tools",
    title: pmToolsArticle.title,
    excerpt:
      "Notion, Asana, and Monday.com for small teams: when to pick docs-first vs tasks vs visual boards.",
  },
];

export function getArticleBySlug(slug: string): ArticleContent | null {
  return articlesBySlug[slug] ?? null;
}
