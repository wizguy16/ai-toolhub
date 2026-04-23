import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { AffiliateAnchor } from "@/components/AffiliateAnchor";
import { tools, type ToolId } from "@/lib/tools";
import { HeroAiRecommend } from "./HeroAiRecommend";
import { StubForm } from "./StubForm";

const IMG_BENTO_LARGE = "/images/deep_dive.jpg";

const IMG_CREDIT_BUILDER = "/images/credit_builder.jpg";
const IMG_MARKETING = "/images/marketing.jpg";
const IMG_MARKETING_2 = "/images/marketing2.jpg";

function IconArrow() {
  return (
    <svg
      className="h-4 w-4"
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

function IconClock() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-secondary"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function StarGlyph({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" aria-hidden>
      <path
        fill="currentColor"
        d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.51L10 13.9l-4.94 2.6.94-5.51-4-3.9 5.53-.8L10 1.5z"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="flex gap-0.5 text-[var(--primary)]">
        {[0, 1, 2, 3, 4].map((i) => {
          const idx = i + 1;
          let opacity = 0.22;
          if (rating >= idx) opacity = 1;
          else if (rating > idx - 1) opacity = Math.max(0.25, rating - (idx - 1));
          return <StarGlyph key={i} className="h-4 w-4 shrink-0" style={{ opacity }} />;
        })}
      </div>
      <span className="text-sm font-semibold text-primary">{rating.toFixed(1)}</span>
    </div>
  );
}

const HOME_TOP_PICKS: {
  tool: ToolId;
  pos: string;
  description: string;
  rating: number;
  bestFor: string;
  trust: string;
  cta: string;
  featured: boolean;
}[] = [
  {
    tool: "jasper",
    pos: "pick-1-jasper",
    description:
      "The ultimate AI writing assistant for marketing and enterprise teams.",
    rating: 4.8,
    bestFor: "Content marketing",
    trust: "Used by 50,000+ teams",
    cta: "Start writing →",
    featured: true,
  },
  {
    tool: "notion",
    pos: "pick-2-notion",
    description: "An all-in-one workspace for notes, docs, and projects.",
    rating: 4.9,
    bestFor: "Team productivity",
    trust: "Free plan available",
    cta: "View pricing →",
    featured: false,
  },
  {
    tool: "supabase",
    pos: "pick-3-supabase",
    description: "The open source Firebase alternative built for developers.",
    rating: 4.7,
    bestFor: "Backend & scaling",
    trust: "No credit card required",
    cta: "Get started →",
    featured: false,
  },
];

/** Order: 1) credit builder, 2) marketing (center column on desktop), 3) PM last */
const HOME_EDITOR_CHOICE_CARDS: {
  href: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCredit?: string;
  readMin: number;
}[] = [
  {
    href: "/posts/fix-credit-fast-2026",
    category: "Finance",
    title: "Best Credit Builder Apps",
    description:
      "Reliable platforms to help you build credit with clear reporting and low fees.",
    image: IMG_CREDIT_BUILDER,
    imageAlt: "Credit builder apps",
    imageCredit: "Photo: MyStackTools — replace with photographer or stock license as needed.",
    readMin: 6,
  },
  {
    href: "/posts/best-ai-writing-tools-marketing",
    category: "AI",
    title: "Best AI Writing Tools for Marketing",
    description:
      "Compare top AI tools for content creation, marketing, and automation.",
    image: IMG_MARKETING,
    imageAlt: "AI writing tools for marketing",
    readMin: 8,
  },
  {
    href: "/posts/pm-tools",
    category: "Productivity",
    title: "Best Project Management Tools for Small Teams",
    description:
      "Compare tools that help teams collaborate, track tasks, and scale workflows.",
    image: IMG_MARKETING_2,
    imageAlt: "Project management for small teams",
    readMin: 12,
  },
];

const HOME_PRICE_ROWS: {
  tool: ToolId;
  bestFor: string;
  startingPrice: string;
}[] = [
  {
    tool: "notion",
    bestFor: "Best for all-in-one workspace",
    startingPrice: "Free; paid from ~$10/user/mo",
  },
  {
    tool: "asana",
    bestFor: "Best for team task management",
    startingPrice: "Free; paid from ~$11/user/mo",
  },
  {
    tool: "monday",
    bestFor: "Best for structured workflows",
    startingPrice: "Free; paid from ~$9/seat/mo",
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-primary">
      <main className="mx-auto max-w-[1120px] px-6 py-12 md:py-20">
        <HeroAiRecommend />

        <section className="border-t border-[var(--border)] py-14 md:py-16">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-[2rem]">
              <span aria-hidden className="mr-1.5 inline-block">
                🔥
              </span>
              Top Tools People Are Using Right Now
            </h2>
            <p className="mt-1 max-w-2xl text-lg text-secondary">
              Hand-picked tools we recommend based on performance and value.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
            {HOME_TOP_PICKS.map((pick) => {
              const meta = tools[pick.tool];
              const initial = meta.name.charAt(0);
              const isFeatured = pick.featured;
              return (
                <AffiliateAnchor
                  key={pick.tool}
                  tool={pick.tool}
                  source="home-top-picks"
                  pos={pick.pos}
                  title="Opens in a new tab"
                  className={
                    isFeatured
                      ? "group relative z-[1] flex h-full min-h-0 scale-[1.02] flex-col rounded-[var(--radius)] border-2 border-[var(--primary)] bg-[var(--surface)] p-6 shadow-[0_14px_40px_rgba(29,78,216,0.2)] no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(29,78,216,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] max-md:scale-100"
                      : "group flex h-full min-h-0 flex-col rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  }
                >
                  <div className="flex min-h-0 flex-1 flex-col md:min-h-[300px]">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(29,78,216,0.1)] text-sm font-bold text-[var(--primary)]"
                        aria-hidden
                      >
                        {initial}
                      </div>
                      {isFeatured ? (
                        <span className="badge shrink-0 text-[10px] font-bold uppercase tracking-wider">
                          #1 Pick
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mb-2 text-xl font-semibold tracking-tight text-primary transition-colors duration-200 group-hover:text-[var(--primary)] group-hover:opacity-[0.92]">
                      {meta.name}
                    </h3>
                    <p className="cursor-default text-sm leading-relaxed text-secondary line-clamp-2">
                      {pick.description}
                    </p>

                    <div className="cursor-default">
                      <StarRating rating={pick.rating} />
                    </div>

                    <p className="mb-0 cursor-default text-xs italic text-secondary">
                      Best for: {pick.bestFor}
                    </p>

                    <div className="min-h-[1px] flex-1" aria-hidden />

                    <p className="mb-4 cursor-default text-xs text-[var(--success)]">
                      {pick.trust}
                    </p>

                    <span className="btn-primary inline-flex w-full items-center justify-center py-3 text-center text-sm font-semibold no-underline">
                      {pick.cta}
                    </span>
                  </div>
                </AffiliateAnchor>
              );
            })}
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-[2rem]">
                Editor&apos;s Choice
              </h2>
              <p className="mt-1 text-secondary">
                Hand-picked guides for high performance.
              </p>
            </div>
            <Link
              href="/posts"
              className="link-accent inline-flex items-center gap-1 text-sm font-semibold no-underline"
            >
              View all
              <IconArrow />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="card relative !h-[380px] !p-0 overflow-hidden md:col-span-8 md:col-start-1 md:row-start-1 md:!h-[450px]">
              <Image
                src={IMG_BENTO_LARGE}
                alt="Editorial deep dive on AI tools for small business"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 z-10 p-6 md:p-8">
                <span className="mb-3 inline-block rounded bg-[var(--primary)] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--surface)]">
                  Top pick 2026
                </span>
                <h3 className="mb-2 max-w-lg text-2xl font-bold text-[var(--surface)] md:text-3xl">
                  Best AI Tools for Small Business
                </h3>
                <p className="mb-6 max-w-lg text-sm leading-relaxed text-[var(--surface)]/90 md:text-base">
                  Boost your productivity with the latest LLM integrations and
                  automated workflows built for lean teams.
                </p>
                <Link
                  href="/posts"
                  className="group btn-secondary inline-flex items-center gap-2 no-underline transition hover:border-transparent hover:bg-[var(--primary)] hover:text-[var(--surface)]"
                >
                  Read guide
                  <span className="inline-block transition group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="card relative flex flex-col overflow-hidden border-[var(--primary)]/20 bg-[var(--primary)]/5 md:col-span-4 md:col-start-9 md:row-start-1 md:min-h-[280px]">
              <div className="relative z-10 flex flex-1 flex-col">
                <h3 className="mb-2 text-xl font-semibold text-[var(--primary)]">
                  Compare pricing for top tools
                </h3>
                <p className="mb-5 text-sm text-secondary">
                  {"Don't overpay — compare top tools in seconds"}
                </p>
                <ul className="mb-6 flex list-none flex-1 flex-col gap-3 p-0">
                  {HOME_PRICE_ROWS.map((row, i) => {
                    const meta = tools[row.tool];
                    const pos = `price-row-${i + 1}`;
                    const isPopular = row.tool === "notion";
                    return (
                      <li key={row.tool}>
                        <AffiliateAnchor
                          tool={row.tool}
                          source="homepage"
                          pos={pos}
                          title={`${meta.name}: view pricing (opens in a new tab)`}
                          className={
                            isPopular
                              ? "card group !flex !flex-row !flex-wrap !items-center !justify-between !gap-x-3 !gap-y-1.5 !border-2 !border-[var(--primary)]/45 !bg-[var(--primary)]/[0.11] !px-3 !py-2.5 text-sm !shadow-sm no-underline transition hover:!border-[var(--primary)]/55 hover:!bg-[var(--primary)]/[0.14] hover:shadow-md cursor-pointer"
                              : "card group !flex !flex-row !flex-wrap !items-center !justify-between !gap-x-3 !gap-y-1.5 !px-3 !py-2.5 text-sm !shadow-sm no-underline transition hover:border-[var(--primary)]/35 hover:bg-[var(--surface)]/80 hover:shadow-md cursor-pointer"
                          }
                        >
                          <div className="min-w-0 flex-[1_1_10rem]">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-medium text-primary">
                                {meta.name}
                              </span>
                              {isPopular ? (
                                <span className="badge shrink-0 text-[10px] font-bold uppercase tracking-wider">
                                  Most popular
                                </span>
                              ) : null}
                            </div>
                            <span className="mt-0.5 block text-xs leading-snug text-secondary">
                              {row.bestFor}
                            </span>
                          </div>
                          <span className="shrink-0 font-semibold text-secondary">
                            {row.startingPrice}
                          </span>
                          <span className="ml-auto shrink-0 font-semibold text-[var(--primary)] group-hover:underline">
                            View pricing →
                          </span>
                        </AffiliateAnchor>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/posts/pm-tools"
                  className="btn-primary inline-flex w-full items-center justify-center gap-2 no-underline transition hover:opacity-95"
                >
                  See full comparison
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[var(--primary)]/10 blur-3xl" />
            </div>

            {HOME_EDITOR_CHOICE_CARDS.map((post, index) => (
              <Link
                key={post.href}
                href={post.href}
                className={`card group flex h-full cursor-pointer flex-col no-underline text-primary transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] md:col-span-4 md:row-start-2 ${
                  index === 0
                    ? "md:col-start-1"
                    : index === 1
                      ? "md:col-start-5"
                      : "md:col-start-9"
                }`}
              >
                <div className="relative mb-5 h-40 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                {post.imageCredit ? (
                  <p className="mb-2 text-[10px] font-medium leading-snug text-secondary">
                    {post.imageCredit}
                  </p>
                ) : null}
                <span className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--primary)]">
                  {post.category}
                </span>
                <h3 className="mb-2 text-lg font-semibold leading-snug text-primary transition-colors duration-200 group-hover:text-[var(--primary)] md:text-xl">
                  {post.title}
                </h3>
                <p className="mb-4 flex-grow text-sm leading-relaxed text-secondary">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center gap-2 border-t border-[var(--border)] pt-4 text-xs text-secondary">
                  <IconClock />
                  {post.readMin} min read
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 flex flex-wrap items-center justify-center gap-10 border-y border-[var(--border)] py-10 text-secondary opacity-95 md:mb-24 md:gap-16 md:py-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary md:text-sm">
            <svg
              className="h-5 w-5 text-[var(--primary)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 4 2-7L2 9h7z" />
            </svg>
            Trusted by 50K+ readers
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary md:text-sm">
            <svg
              className="h-5 w-5 text-[var(--primary)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 4 2-7L2 9h7z" />
            </svg>
            Top rated blog 2026
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary md:text-sm">
            <svg
              className="h-5 w-5 text-[var(--primary)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            No spam, no bias
          </div>
        </section>

        <section className="mt-12 text-center">
          <div className="cta-section px-6 py-12 md:px-12 md:py-16">
            <div className="mx-auto max-w-2xl">
              <h2 className="cta-title mb-3 text-3xl tracking-tight md:text-[2rem]">
                Never overpay for software again
              </h2>
              <p className="cta-text mb-8">
                Join 15,000+ subscribers and get the latest tool discounts and
                feature reviews in your inbox every Tuesday.
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
