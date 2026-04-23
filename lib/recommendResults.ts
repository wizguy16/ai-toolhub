import type { ToolId } from "@/lib/tools";

export type RecommendBucket = "credit" | "ai" | "pm" | "default";

export type RecommendAlternate = {
  toolId: ToolId;
  name: string;
  rating: string;
  badge: string;
  description: string;
  /** Omit for letter placeholder */
  logoSrc?: string;
};

export type RecommendPrimary = {
  toolId: ToolId;
  name: string;
  rating: string;
  description: string;
  bestFor: string;
  tags: readonly string[];
  logoSrc?: string;
};

export type RecommendBundle = {
  bucket: RecommendBucket;
  /** Short label for the primary card ribbon */
  pickLabel: string;
  primary: RecommendPrimary;
  alternates: readonly [RecommendAlternate, RecommendAlternate];
};

/** Raw `q` from URL — trim for display; never treat array tail beyond [0]. */
export function parseRecommendQueryParam(raw: string | string[] | undefined): {
  displayQuery: string;
  normalizedForMatch: string;
} {
  const single = Array.isArray(raw) ? raw[0] : raw;
  const trimmed = (single ?? "").trim();
  return {
    displayQuery: trimmed,
    normalizedForMatch: trimmed.toLowerCase(),
  };
}

/**
 * Keyword buckets (deterministic priority: credit → AI → PM → default).
 * Matching is simple substring checks on the normalized query.
 */
export function classifyRecommendBucket(normalized: string): RecommendBucket {
  if (!normalized) return "default";
  if (["credit", "repair", "score"].some((k) => normalized.includes(k))) return "credit";
  if (["ai", "writing", "marketing"].some((k) => normalized.includes(k))) return "ai";
  if (["project", "team", "productivity"].some((k) => normalized.includes(k))) return "pm";
  return "default";
}

const BUNDLES: Record<RecommendBucket, RecommendBundle> = {
  credit: {
    bucket: "credit",
    pickLabel: "Top pick",
    primary: {
      toolId: "creditstrong",
      name: "Credit Strong",
      rating: "4.6",
      description:
        "A structured credit-builder program for people who want payment history and a clear payoff schedule—strong when you are ready to commit to on-time cycles.",
      bestFor: "Structured credit rebuilding",
      tags: ["Payment history focus", "Predictable schedule", "Serious rebuild path"] as const,
    },
    alternates: [
      {
        toolId: "self",
        name: "Self",
        rating: "4.5",
        badge: "Best for habits",
        description:
          "Credit-builder loan plus savings discipline in one flow—helpful when consistency, not complexity, is the bottleneck.",
      },
      {
        toolId: "kickoff",
        name: "Kickoff",
        rating: "4.3",
        badge: "Goal-driven",
        description:
          "Goal-oriented credit building when you want a product that keeps milestones visible and motivation high.",
      },
    ],
  },
  ai: {
    bucket: "ai",
    pickLabel: "Top pick",
    primary: {
      toolId: "jasper",
      name: "Jasper AI",
      rating: "4.8",
      description:
        "The ultimate AI writing assistant for enterprise teams and creators, designed to scale high-quality content production effortlessly.",
      bestFor: "Content Marketing & Scaling",
      tags: ["SEO-optimized copy", "50+ templates", "Team collaboration"] as const,
      logoSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlWs9OBu4q5wGhfGY3BqlTyeu8xHmQTJJXHeilQvz7LzTbinGsfipaOLMRGI8znGLHzD3SLa_3MrzbTPwx1rQLIfni6IODdJcs4MHSGt-Gx7N_5lrnX2bokBRuQ79R4WtvvagGVrXPdH_lqVfgroRkGf39yBvyFUYNTX1VHlGEtoqJ2mlFeZzLd4rD-5_rWc-o5gJw2iUOp_T-fF-benlc7sZH70tqurFftNZIuMbi-1EWH4LSCm9vI7cCXKWUjc9w1xLhbt_VeS8",
    },
    alternates: [
      {
        toolId: "copyai",
        name: "Copy.ai",
        rating: "4.6",
        badge: "Best for beginners",
        description:
          "Quick and easy marketing copy generation with an intuitive workspace for rapid content drafting.",
        logoSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAA-L8dxg-9S_VglTZrZjSFh0BR5eUOjd7-m3KmLfmNDgQQlTazbBMV0Mnb42bEv4U3_SHvpL7lRUi2Wgx4ARfEJMer_ckcaw_fBh3uuD1ipu8pnAkQej8RfZD0fvzuX98QujzfxKBfH4c9teQs7xcr8NiuTVHp1erDHVRSpBkop8USwdlfbPox5T2dOWcYnFe1fmosOGomuZzVrj_jianXQqTCWAn0GwuLEvpWLuxJLjm1HAdviyaNVidbRbIAhQyXAwNYzqukstQ",
      },
      {
        toolId: "writesonic",
        name: "Writesonic",
        rating: "4.7",
        badge: "Best for blogs",
        description:
          "AI writer specialized for long-form blogs, ads, and product descriptions with real-time data integration.",
        logoSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBF4fzeDGu-PNXtvmsCZ-lLaafcPFyCy8khTVRLY8TEZjqb_2mINU7l7sqeg6nsBIPnMaU4AYZB4fhDmgwpXG6-mnjsVyGnZ2TK5PEcpuSxzqFYSD3XK1pxTESGbTaM5Ne-25hSnMWrEPJm8HNTtKnbIXTcv92gHzCd0I7eiqfb3c5fFJJS_t4XcAXjXD_GKAtcCsxZCJWr9dmNEZnWSxmB0mtfFvL7RbwG1covTB69p1ik4k9ROpFgOWyTvejmNyJ-TUwg7dV7iKo",
      },
    ],
  },
  pm: {
    bucket: "pm",
    pickLabel: "Top pick",
    primary: {
      toolId: "linear",
      name: "Linear",
      rating: "4.8",
      description:
        "Issue tracking built for speed—keyboard-first workflows, cycles, and roadmaps that stay out of the way so product and engineering ship together.",
      bestFor: "Product & engineering delivery",
      tags: ["Fast workflows", "Cycles & roadmaps", "Git integrations"] as const,
    },
    alternates: [
      {
        toolId: "asana",
        name: "Asana",
        rating: "4.7",
        badge: "Best for accountability",
        description:
          "Work management with tasks, timelines, and portfolios—strong when clarity of ownership across teams matters most.",
      },
      {
        toolId: "monday",
        name: "Monday.com",
        rating: "4.6",
        badge: "Visual ops",
        description:
          "Boards and automations for cross-functional work—great when you want visibility without heavy configuration.",
      },
    ],
  },
  default: {
    bucket: "default",
    pickLabel: "Top Picks",
    primary: {
      toolId: "jasper",
      name: "Jasper AI",
      rating: "4.8",
      description:
        "The ultimate AI writing assistant for enterprise teams and creators, designed to scale high-quality content production effortlessly.",
      bestFor: "Content Marketing & Scaling",
      tags: ["SEO-optimized copy", "50+ templates", "Team collaboration"] as const,
      logoSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlWs9OBu4q5wGhfGY3BqlTyeu8xHmQTJJXHeilQvz7LzTbinGsfipaOLMRGI8znGLHzD3SLa_3MrzbTPwx1rQLIfni6IODdJcs4MHSGt-Gx7N_5lrnX2bokBRuQ79R4WtvvagGVrXPdH_lqVfgroRkGf39yBvyFUYNTX1VHlGEtoqJ2mlFeZzLd4rD-5_rWc-o5gJw2iUOp_T-fF-benlc7sZH70tqurFftNZIuMbi-1EWH4LSCm9vI7cCXKWUjc9w1xLhbt_VeS8",
    },
    alternates: [
      {
        toolId: "notion",
        name: "Notion",
        rating: "4.7",
        badge: "All-in-one workspace",
        description:
          "Docs, databases, and lightweight project views in one place—popular default when shared context beats specialized PM depth.",
      },
      {
        toolId: "raycast",
        name: "Raycast",
        rating: "4.8",
        badge: "Power-user speed",
        description:
          "Launcher-first productivity for people who live in shortcuts—complements your stack when velocity is the goal.",
      },
    ],
  },
};

export function getRecommendBundle(normalizedForMatch: string): RecommendBundle {
  const bucket = classifyRecommendBucket(normalizedForMatch);
  return BUNDLES[bucket];
}
