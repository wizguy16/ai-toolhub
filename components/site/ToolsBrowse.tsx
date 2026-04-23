"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AffiliateAnchor } from "@/components/AffiliateAnchor";
import { ExternalLinkGlyph } from "@/components/icons/ExternalLinkGlyph";
import { StubForm } from "@/components/site/StubForm";
import type { ToolId } from "@/lib/tools";

type Category = "All" | "AI" | "Finance" | "Productivity" | "Development";
type PriceFilter = "any" | "free" | "freemium" | "paid";
type RatingFilter = "any" | "4.5" | "4.0";

type Tool = {
  id: string;
  /** Must exist in `lib/tools` for affiliate routing */
  programId: ToolId;
  name: string;
  category: Exclude<Category, "All">;
  description: string;
  rating: number;
  bestFor: string;
  priceTier: "free" | "freemium" | "paid";
  icon: "token" | "wallet" | "bolt" | "code" | "brain" | "database";
  cta: string;
};

const CATEGORIES: Category[] = [
  "All",
  "AI",
  "Finance",
  "Productivity",
  "Development",
];

const TOOLS: Tool[] = [
  {
    id: "jasper",
    programId: "jasper",
    name: "Jasper",
    category: "AI",
    description: "Enterprise-grade AI content platform for marketing teams.",
    rating: 4.8,
    bestFor: "Blog automation",
    priceTier: "paid",
    icon: "token",
    cta: "See pricing",
  },
  {
    id: "ramp",
    programId: "ramp",
    name: "Ramp",
    category: "Finance",
    description: "Corporate cards and spend management built for speed.",
    rating: 5,
    bestFor: "Startup credit",
    priceTier: "freemium",
    icon: "wallet",
    cta: "View deal",
  },
  {
    id: "raycast",
    programId: "raycast",
    name: "Raycast",
    category: "Productivity",
    description: "A lightning fast, fully extendable launcher for macOS.",
    rating: 4.2,
    bestFor: "Developers",
    priceTier: "free",
    icon: "bolt",
    cta: "Try Now",
  },
  {
    id: "supabase",
    programId: "supabase",
    name: "Supabase",
    category: "Development",
    description: "The open source Firebase alternative. Build in a weekend.",
    rating: 4.9,
    bestFor: "Backend APIs",
    priceTier: "freemium",
    icon: "code",
    cta: "See pricing",
  },
  {
    id: "midjourney",
    programId: "midjourney",
    name: "Midjourney",
    category: "AI",
    description: "High-fidelity image generation via Discord interface.",
    rating: 4.7,
    bestFor: "Creative visuals",
    priceTier: "paid",
    icon: "brain",
    cta: "See pricing",
  },
  {
    id: "notion",
    programId: "notion",
    name: "Notion",
    category: "Productivity",
    description: "All-in-one workspace for notes, docs, and projects.",
    rating: 4.6,
    bestFor: "Knowledge base",
    priceTier: "freemium",
    icon: "database",
    cta: "See pricing",
  },
];

const TOP_MONTH: {
  rank: string;
  name: string;
  label: string;
  programId: ToolId;
}[] = [
  { rank: "01", name: "Linear", label: "Project management", programId: "linear" },
  { rank: "02", name: "Perplexity AI", label: "Search engine", programId: "perplexity" },
  { rank: "03", name: "Stripe", label: "Payments infrastructure", programId: "stripe" },
];

const SIDEBAR_DEALS = [
  { discount: "60% off", name: "Surfshark VPN", href: "/posts" as const },
  { discount: "3 months free", name: "Squarespace", href: "/posts" as const },
] as const;

function IconTrending({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  );
}

function IconTag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M12 2H2v10l9.29 9.29a1 1 0 001.41 0l6.59-6.59a1 1 0 000-1.41L12 2z" />
      <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconArrowForward({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ToolIcon({ kind }: { kind: Tool["icon"] }) {
  const common = "h-6 w-6 text-secondary";
  switch (kind) {
    case "token":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2L4 6v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V6l-8-4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "wallet":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="6"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="14" r="1" fill="currentColor" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "code":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M16 18l6-6-6-6M8 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "brain":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 5a3 3 0 00-3 3v1a3 3 0 106 0V8a3 3 0 00-3-3zM8 15v2a4 4 0 008 0v-2M6 11H5a2 2 0 100 4h1m12-4h1a2 2 0 110 4h-1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "database":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" />
          <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5" stroke="currentColor" strokeWidth="2" />
          <path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
}

function StarGlyph({ state }: { state: "full" | "half" | "empty" }) {
  const base =
    "h-3.5 w-3.5 shrink-0 text-secondary " +
    (state === "full" ? "opacity-100" : state === "half" ? "opacity-60" : "opacity-25");
  return (
    <svg className={base} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
}

function RatingStars({ value }: { value: number }) {
  const cells = [0, 1, 2, 3, 4].map((i) => {
    const t = value - i;
    if (t >= 1) return "full" as const;
    if (t >= 0.5) return "half" as const;
    return "empty" as const;
  });
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {cells.map((s, i) => (
        <StarGlyph key={i} state={s} />
      ))}
    </div>
  );
}

export function ToolsBrowse() {
  const [category, setCategory] = useState<Category>("All");
  const [price, setPrice] = useState<PriceFilter>("any");
  const [rating, setRating] = useState<RatingFilter>("any");

  const filtered = useMemo(() => {
    return TOOLS.filter((t) => {
      if (category !== "All" && t.category !== category) return false;
      if (price !== "any" && t.priceTier !== price) return false;
      if (rating === "4.5" && t.rating < 4.5) return false;
      if (rating === "4.0" && t.rating < 4) return false;
      return true;
    });
  }, [category, price, rating]);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-[1120px] px-6 py-12 md:py-16">
        <header className="mb-12">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Browse tools
          </h1>
          <p className="max-w-2xl text-lg text-secondary">
            Explore the best tools by category and use case.
          </p>
        </header>

        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {CATEGORIES.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={
                    active
                      ? "btn-primary rounded-full border border-transparent px-4 py-2 text-xs font-bold uppercase tracking-wide"
                      : "rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-bold uppercase tracking-wide text-secondary transition hover:bg-[var(--background)]"
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <label className="sr-only" htmlFor="tools-price">
              Price filter
            </label>
            <select
              id="tools-price"
              value={price}
              onChange={(e) => setPrice(e.target.value as PriceFilter)}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-primary focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-0"
            >
              <option value="any">Price: Any</option>
              <option value="free">Free</option>
              <option value="freemium">Freemium</option>
              <option value="paid">Paid</option>
            </select>
            <label className="sr-only" htmlFor="tools-rating">
              Rating filter
            </label>
            <select
              id="tools-rating"
              value={rating}
              onChange={(e) => setRating(e.target.value as RatingFilter)}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-primary focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-0"
            >
              <option value="any">Rating: Any</option>
              <option value="4.5">4.5+ stars</option>
              <option value="4.0">4.0+ stars</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((tool) => (
                <AffiliateAnchor
                  key={tool.id}
                  tool={tool.programId}
                  source="tools-browse"
                  pos={`card-${tool.id}`}
                  title="Opens in a new tab"
                  className="card group flex h-full flex-col no-underline transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-1 flex-col space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--background)]">
                        <ToolIcon kind={tool.icon} />
                      </div>
                      <span className="badge shrink-0">{tool.category}</span>
                    </div>
                    <h2 className="text-xl font-semibold leading-snug text-primary transition-colors duration-200 group-hover:text-[var(--primary)] group-hover:opacity-[0.92]">
                      {tool.name}
                    </h2>
                    <p className="line-clamp-2 cursor-default text-sm leading-relaxed text-secondary">
                      {tool.description}
                    </p>
                    <div className="flex cursor-default items-center gap-2 pt-1">
                      <RatingStars value={tool.rating} />
                      <span className="text-xs font-semibold tabular-nums text-primary">
                        {tool.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 border-t border-[var(--border)] pt-3">
                    <p className="cursor-default text-xs font-semibold uppercase tracking-wide text-secondary">
                      Best for: {tool.bestFor}
                    </p>
                    <span className="btn-primary mt-3 inline-flex w-full cursor-pointer items-center justify-center gap-1.5 py-2.5 text-center text-sm font-semibold">
                      {tool.cta}
                      <ExternalLinkGlyph className="shrink-0 opacity-80" />
                    </span>
                  </div>
                </AffiliateAnchor>
              ))}
            </div>
            {filtered.length === 0 ? (
              <p className="mt-8 text-secondary">
                No tools match these filters. Try widening your selection.
              </p>
            ) : null}
          </div>

          <aside className="flex flex-col gap-8 lg:col-span-4">
            <section className="card">
              <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-primary">
                <IconTrending className="h-5 w-5 shrink-0 text-secondary" />
                Top tools this month
              </h2>
              <div className="space-y-2">
                {TOP_MONTH.map((row) => (
                  <AffiliateAnchor
                    key={row.rank}
                    tool={row.programId}
                    source="tools-top-month"
                    pos={`rank-${row.rank}`}
                    title="Opens in a new tab"
                    className="group flex cursor-pointer items-center gap-3 rounded-lg p-2 no-underline transition-colors hover:bg-[var(--background)]"
                  >
                    <div className="top-rank min-w-[2.25rem] text-2xl tabular-nums md:text-3xl">
                      {row.rank}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-[var(--primary)] group-hover:opacity-[0.92]">
                        {row.name}
                      </p>
                      <p className="cursor-default text-xs text-secondary">{row.label}</p>
                    </div>
                  </AffiliateAnchor>
                ))}
              </div>
            </section>

            <section className="card">
              <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-primary">
                <IconTag className="h-5 w-5 shrink-0 text-secondary" />
                Best deals
              </h2>
              <div className="space-y-4">
                {SIDEBAR_DEALS.map((deal) => (
                  <Link
                    key={deal.name}
                    href={deal.href}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] p-3 no-underline transition-shadow hover:shadow-sm"
                  >
                    <div>
                      <p className="cursor-default text-xs font-bold uppercase tracking-wide text-secondary">
                        {deal.discount}
                      </p>
                      <p className="text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-[var(--primary)] group-hover:opacity-[0.92]">
                        {deal.name}
                      </p>
                    </div>
                    <IconArrowForward className="h-5 w-5 shrink-0 text-secondary" />
                  </Link>
                ))}
              </div>
            </section>

            <section className="card space-y-4">
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-primary">
                  Get the best tool deals before everyone else
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  We track price drops, hidden gems, and top-rated tools weekly.
                </p>
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  name="digest-email"
                  autoComplete="email"
                  placeholder="email@example.com"
                  aria-label="Email for digest"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-primary placeholder:text-secondary focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-0"
                />
                <button type="button" className="btn-primary w-full text-sm">
                  Get deals
                </button>
              </div>
            </section>
          </aside>
        </div>

        <section className="mt-12 text-center">
          <div className="cta-section px-6 py-12 md:px-12 md:py-16">
            <div className="mx-auto max-w-2xl">
              <h2 className="cta-title mb-3 text-3xl tracking-tight md:text-[2rem]">
                Never overpay for software again
              </h2>
              <p className="cta-text mb-8">
                Join 15,000+ subscribers and get the latest tool discounts and feature reviews
                in your inbox every Tuesday.
              </p>
              <StubForm className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  className="flex-1"
                />
                <button type="submit" className="btn-primary min-h-[48px] shrink-0">
                  Join newsletter
                </button>
              </StubForm>
              <p className="cta-subtext mt-6 text-xs font-medium">
                Trusted by 10,000+ builders.
              </p>
              <p className="cta-subtext mt-3 text-xs">
                By subscribing, you agree to our Privacy Policy. No spam, ever.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
