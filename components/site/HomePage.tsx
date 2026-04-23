import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { AffiliateAnchor } from "@/components/AffiliateAnchor";
import { tools, type ToolId } from "@/lib/tools";
import { HeroAiRecommend } from "./HeroAiRecommend";
import { StubForm } from "./StubForm";

const IMG_BENTO_LARGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCtuk1I33S934asmYgrYbUSZBztYvW25ST5-ygJNbo-d_7ZqOgQFZ4lRPvc2DVkSGdJvMQPPlsQAd_fLvJo8GSifey9XJvVLIwNSGF_sFVwMyOsYzzc3xtD39gz5KvazERymvHQznQew3czY9o7ID1LoHuFQztHw0Nhg0tpAT9WlhF1AKWAo_UP1YdYx1YYQdqFtbCkbdeljFZw_VdLHZD1UxiUlToRMhFQ_lWnl8ToY-_h7h8dzBO4T9aoxRfnktfqeyhlhWp_uKY";

const IMG_CARD_FINANCE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuACLSSjWJ2B0w8mnH2Jhpn72l2DLQG9aqlg0djBWeWI3yfw8Yzh6wkjwpcqsyCaZtpEsLbVzzHrgi3U9jhMRBI5mZ-d2CsJKP-Rkf2kU1UnBKLmK9UmGN4QOTwohCbOwpI17-Svd9kvfxsNCSDNCLshuWgNBiZV9jL0Cxiz1R7FFqn5fI8rpRtRn4DKIhrWl_lcXfGF7ALBqFi_Ob0I-4mknmorgx7uhEn_LBc0QOFDDXsSdwTyGFphGDBu40imZS-7mJ54JF01e0A";

const IMG_CARD_DEV =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDRY9vchOSWE7l7DbtRZiuncivNB8I_neaaPp6xrv5UIa4Nq8pfbUvgQnDXYvvsCrtF_I-Sk3qBwNPFFoX62I_OQjm5ZHUGCvJY5mWi7ORIum5IJqYmBk_MzIhKP43EUgvGnS0cJcJ69J8EHuZmThKSE_vhsDeTFHgxDrOpckzE3bXwWwN1BG2k3yPgNGtijNtvVENWuyHUfBn9Zzy92XceNoqight_dxK0ofP5MLsSUzr3WjLKVN5z98Zks8aUOpt1VelKyn5qA";

const IMG_CARD_TEAM =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6klNx1DRmLdGU30A6MsZZQEPdRXPwwrfJeLLv4G99m_tVO_LIR0Rqjnda70UcUpQzOPsd_GzryiHY_ZPzvSAVXhk8eLamcHdAkotBglNugNgjYMLsgIJ0KQneMezx6IP0Q1B6zPRaiLIVEBxe2BLhSTE04PYacvjxAQHLvj7NmLL8UONOCV_IIDfZktLQDmmZDolprPHvra7-S-VtZafApSms5l8XfI2eUmLZOGE5kNAZkewDE1Rsfjw-k96VV450OhzTuGumZ0g";

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
                      ? "group relative z-[1] flex h-full min-h-0 scale-[1.02] flex-col rounded-[var(--radius)] border-2 border-[var(--primary)] bg-[var(--surface)] p-6 shadow-[0_14px_40px_rgba(0,88,190,0.2)] no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,88,190,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] max-md:scale-100"
                      : "group flex h-full min-h-0 flex-col rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  }
                >
                  <div className="flex min-h-0 flex-1 flex-col md:min-h-[300px]">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(0,88,190,0.1)] text-sm font-bold text-[var(--primary)]"
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
            <div className="card relative !h-[380px] !p-0 overflow-hidden md:col-span-8 md:!h-[450px]">
              <Image
                src={IMG_BENTO_LARGE}
                alt="AI tools feature"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
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

            <div className="card relative flex flex-col overflow-hidden border-[var(--primary)]/20 bg-[var(--primary)]/5 md:col-span-4 md:min-h-[280px]">
              <div className="relative z-10 flex flex-1 flex-col">
                <h3 className="mb-2 text-xl font-semibold text-[var(--primary)]">
                  Price comparisons
                </h3>
                <p className="mb-5 text-sm text-secondary">
                  We track pricing for 500+ SaaS tools weekly.
                </p>
                <ul className="mb-6 flex flex-1 flex-col gap-3">
                  <li className="card !flex !flex-row !items-center !justify-between !px-3 !py-2.5 text-sm !shadow-sm">
                    <span className="font-medium text-primary">
                      ProjectManage X
                    </span>
                    <span className="font-bold text-[var(--primary)]">
                      $12/mo
                    </span>
                  </li>
                  <li className="card !flex !flex-row !items-center !justify-between !px-3 !py-2.5 text-sm !shadow-sm">
                    <span className="font-medium text-primary">
                      TaskFlow Pro
                    </span>
                    <span className="font-bold text-[var(--danger)]">$19/mo</span>
                  </li>
                </ul>
                <button type="button" className="btn-primary w-full">
                  Compare all plans
                </button>
              </div>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[var(--primary)]/10 blur-3xl" />
            </div>

            <article className="card flex flex-col md:col-span-4">
              <div className="relative mb-5 h-40 w-full overflow-hidden rounded-2xl">
                <Image
                  src={IMG_CARD_FINANCE}
                  alt="Finance apps"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--primary)]">
                Finance
              </span>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-primary md:text-xl">
                Best Credit Builder Apps
              </h3>
              <p className="mb-4 flex-grow cursor-default text-sm leading-relaxed text-secondary">
                Reliable platforms to help you build credit with clear reporting
                and low fees.
              </p>
              <div className="flex cursor-default items-center gap-2 border-t border-[var(--border)] pt-4 text-xs text-secondary">
                <IconClock />
                6 min read
              </div>
            </article>

            <article className="card flex flex-col md:col-span-4">
              <div className="relative mb-5 h-40 w-full overflow-hidden rounded-2xl">
                <Image
                  src={IMG_CARD_DEV}
                  alt="Developer tools"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--primary)]">
                Development
              </span>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-primary md:text-xl">
                Top 10 IDE Extensions for 2026
              </h3>
              <p className="mb-4 flex-grow cursor-default text-sm leading-relaxed text-secondary">
                Essential plugins to turn your editor into a high-speed shipping
                environment.
              </p>
              <div className="flex cursor-default items-center gap-2 border-t border-[var(--border)] pt-4 text-xs text-secondary">
                <IconClock />
                8 min read
              </div>
            </article>

            <article className="card flex flex-col md:col-span-4">
              <div className="relative mb-5 h-40 w-full overflow-hidden rounded-2xl">
                <Image
                  src={IMG_CARD_TEAM}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="mb-2 text-xs font-bold uppercase tracking-wide text-[var(--primary)]">
                Productivity
              </span>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-primary md:text-xl">
                Remote Collaboration Survival Kit
              </h3>
              <p className="mb-4 flex-grow cursor-default text-sm leading-relaxed text-secondary">
                The definitive list of software your remote team needs to stay
                connected and efficient.
              </p>
              <div className="flex cursor-default items-center gap-2 border-t border-[var(--border)] pt-4 text-xs text-secondary">
                <IconClock />
                12 min read
              </div>
            </article>
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
            Data-driven reviews
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
