import type { ArticleContent } from "@/components/article/types";
import type { AffiliateId } from "@/lib/affiliates";

const IMG_LINEAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBRmkJcBtkOt17EGRC6MrvFUmC1gHEQpRx8MOYyFChrfIVyaH5EE6LbRKbw7vvbc-WDIK6T2BkKkNAZ6WemOBKU_BH-8JGLYnabVqNY-7DygMeT4VSvxESpGmRU2enIVHHxAm2f8gAcU9lci2uHjYFCjl4CACv3P7iv9NMFa4QVrKkykNZb2mo11HLhiSisRCzTF44JY_2DcX9mvzBhs7dDHABNX6Bt15Hf-FTAH0kgc_hC44v4_zol0lIADuqhoznehlWIvER03_U";

const IMG_ASANA =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDNqICMWo876mBWzj7KbV9WYlOhCBtMcNb4ibciGMzumK89FXrBJ73loTYs1IirP46BzThdV6MWoNyRMAFMSqimqLftQNoCPGIRay4CtLBkL7bgynMQVRBI0TBC1YZUTVj8I_g-uMMWxKbyxYGRU8xMny7FnqvYwYEtLYeaSLU6un8zqt_33dfqVMpf33FS3e1bSYIMyvt9ullf_4OJ_ErplTB7Pj1lACkxcgATExnMA56Zi2egsoQWRFqJXwo8DAzXY03C9lQQNl4";

const IMG_MONDAY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6klNx1DRmLdGU30A6MsZZQEPdRXPwwrfJeLLv4G99m_tVO_LIR0Rqjnda70UcUpQzOPsd_GzryiHY_ZPzvSAVXhk8eLamcHdAkotBglNugNgjYMLsgIJ0KQneMezx6IP0Q1B6zPRaiLIVEBxe2BLhSTE04PYacvjxAQHLvj7NmLL8UONOCV_IIDfZktLQDmmZDolprPHvra7-S-VtZafApSms5l8XfI2eUmLZOGE5kNAZkewDE1Rsfjw-k96VV450OhzTuGumZ0g";

/** Full demo article aligned with the ToolReviews PM comparison layout. */
export const pmToolsArticle: ArticleContent = {
  title: "Best Project Management Tools for Modern Engineering Teams",
  intro:
    "We tested 45+ tools to find the ones that actually help teams ship faster without the management overhead. Here are our top picks for 2024.",
  comparisonTable: {
    headers: [
      "Tool Name",
      "Best For",
      "Rating",
      "Starting Price",
      "Action",
    ],
    rows: [
      [
        "Linear",
        "High-growth startups",
        "4.9/5.0",
        "$8/user/mo",
        "Try Now",
      ],
      [
        "Asana",
        "Cross-team collaboration",
        "4.5/5.0",
        "$10.99/user/mo",
        "Check Price",
      ],
      [
        "Monday.com",
        "Custom workflows",
        "5.0/5.0",
        "$9/user/mo",
        "Check Price",
      ],
    ],
    rowAffiliateIds: ["linear", "asana", "monday"] satisfies AffiliateId[],
  },
  reviews: [
    {
      name: "Linear",
      headline: "The Powerhouse for Development",
      description:
        "Linear is built for the way modern software teams work. It's incredibly fast, keyboard-centric, and eliminates the clutter typically found in enterprise project management tools. The focus on \"cycles\" rather than just \"sprints\" allows for a more fluid development process.",
      pros: [
        "Blazing fast performance",
        "Minimalist, focused interface",
        "Native Git integrations",
      ],
      cons: [
        "Steeper learning curve for non-techs",
        "Limited reporting dashboard",
      ],
      cta: "Visit Linear Site",
      affiliateLinkPlaceholder: "[[AFFILIATE_LINK_1]]",
      affiliateKey: "linear",
      rating: "4.9/5.0",
      badge: "Best for tech teams",
      imageSrc: IMG_LINEAR,
      scoreEase: 95,
      scoreFeatures: 85,
      scoreValue: 90,
    },
    {
      name: "Asana",
      headline: "The Team Collaboration Standard",
      description:
        "Asana balances structure and flexibility for cross-functional teams. Portfolios, timelines, and workload views make it easy for PMs to keep delivery predictable without slowing ICs down.",
      pros: [
        "Strong cross-team visibility",
        "Mature integrations ecosystem",
        "Friendly for mixed technical/non-technical users",
      ],
      cons: [
        "Can feel busy on very large workspaces",
        "Advanced reporting often needs a higher tier",
      ],
      cta: "Visit Asana Site",
      affiliateLinkPlaceholder: "[[AFFILIATE_LINK_2]]",
      affiliateKey: "asana",
      rating: "4.5/5.0",
      badge: "Best for collaboration",
      imageSrc: IMG_ASANA,
      scoreEase: 80,
      scoreFeatures: 95,
      scoreValue: 75,
    },
    {
      name: "Monday.com",
      headline: "The Most Flexible Platform",
      description:
        "Monday.com is less of a project management tool and more of a \"Work OS.\" Its modular approach allows you to build virtually any workflow, from CRM to creative production. If your team has complex, non-linear needs, this is the winner.",
      pros: [
        "Highly visual interface",
        "Powerful automation builder",
        "Hundreds of templates",
      ],
      cons: [
        "Pricing tiers can be confusing",
        "Occasional slowdown with large boards",
      ],
      cta: "Check Monday.com Pricing",
      affiliateLinkPlaceholder: "[[AFFILIATE_LINK_3]]",
      affiliateKey: "monday",
      rating: "5.0/5.0",
      badge: "Best for customization",
      imageSrc: IMG_MONDAY,
      scoreEase: 80,
      scoreFeatures: 95,
      scoreValue: 75,
    },
  ],
  faq: [
    {
      question: "How do you test and rank these tools?",
      answer:
        "We run structured trials across real workflows: onboarding, day-to-day tasking, integrations, and billing clarity. Scores reflect speed, reliability, and value for typical engineering teams.",
    },
    {
      question: "Do you earn commissions from links?",
      answer:
        "Yes. Some links may be affiliate partnerships. That never changes our editorial criteria; we only recommend tools we would use on real projects.",
    },
    {
      question: "Which tool should I pick first?",
      answer:
        "If your team lives in GitHub and ships software weekly, start with Linear. If you need cross-functional templates and automations across departments, start with Monday.com or Asana.",
    },
  ],
  verdict:
    "For fast-moving engineering orgs, Linear remains the best default: speed, clarity, and developer-first workflows. If you need maximum configurability across non-engineering teams, Monday.com is the most flexible platform we tested. Match the tool to your primary workflow, then standardize integrations so reporting stays honest.",
};

export type ArticleListItem = {
  slug: string;
  title: string;
  excerpt: string;
};

export const articleList: ArticleListItem[] = [
  {
    slug: "pm-tools",
    title: "Best Project Management Tools for Modern Engineering Teams",
    excerpt:
      "Quick comparison table plus full reviews of Linear, Asana, and Monday.com.",
  },
];

export function getArticleBySlug(slug: string): ArticleContent | null {
  if (slug === "pm-tools") return pmToolsArticle;
  return null;
}
