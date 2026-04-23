import Link from "next/link";
import { affiliateClickHref, type ToolId } from "@/lib/tools";

type Props = {
  searchParams: Promise<{ q?: string | string[] }>;
};

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function IconArrowBack({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function IconAnalytics({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}

function IconUpdate({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M23 4v6h-6" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconSubmitArrow() {
  return (
    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default async function RecommendPage({ searchParams }: Props) {
  const sp = await searchParams;
  const raw = sp.q;
  const q =
    typeof raw === "string" ? raw.trim() : Array.isArray(raw) ? raw[0]?.trim() ?? "" : "";
  const hasQuery = Boolean(q);

  const primary = {
    toolId: "jasper" as const satisfies ToolId,
    name: "Jasper AI",
    rating: "4.8",
    description:
      "The ultimate AI writing assistant for enterprise teams and creators, designed to scale high-quality content production effortlessly.",
    bestFor: "Content Marketing & Scaling",
    tags: ["SEO-optimized copy", "50+ templates", "Team collaboration"] as const,
    logoSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlWs9OBu4q5wGhfGY3BqlTyeu8xHmQTJJXHeilQvz7LzTbinGsfipaOLMRGI8znGLHzD3SLa_3MrzbTPwx1rQLIfni6IODdJcs4MHSGt-Gx7N_5lrnX2bokBRuQ79R4WtvvagGVrXPdH_lqVfgroRkGf39yBvyFUYNTX1VHlGEtoqJ2mlFeZzLd4rD-5_rWc-o5gJw2iUOp_T-fF-benlc7sZH70tqurFftNZIuMbi-1EWH4LSCm9vI7cCXKWUjc9w1xLhbt_VeS8",
  };

  const alternates = [
    {
      toolId: "copyai" as const satisfies ToolId,
      name: "Copy.ai",
      rating: "4.6",
      badge: "Best for beginners",
      description: "Quick and easy marketing copy generation with an intuitive workspace for rapid content drafting.",
      logoSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAA-L8dxg-9S_VglTZrZjSFh0BR5eUOjd7-m3KmLfmNDgQQlTazbBMV0Mnb42bEv4U3_SHvpL7lRUi2Wgx4ARfEJMer_ckcaw_fBh3uuD1ipu8pnAkQej8RfZD0fvzuX98QujzfxKBfH4c9teQs7xcr8NiuTVHp1erDHVRSpBkop8USwdlfbPox5T2dOWcYnFe1fmosOGomuZzVrj_jianXQqTCWAn0GwuLEvpWLuxJLjm1HAdviyaNVidbRbIAhQyXAwNYzqukstQ",
    },
    {
      toolId: "writesonic" as const satisfies ToolId,
      name: "Writesonic",
      rating: "4.7",
      badge: "Best for blogs",
      description:
        "AI writer specialized for long-form blogs, ads, and product descriptions with real-time data integration.",
      logoSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBF4fzeDGu-PNXtvmsCZ-lLaafcPFyCy8khTVRLY8TEZjqb_2mINU7l7sqeg6nsBIPnMaU4AYZB4fhDmgwpXG6-mnjsVyGnZ2TK5PEcpuSxzqFYSD3XK1pxTESGbTaM5Ne-25hSnMWrEPJm8HNTtKnbIXTcv92gHzCd0I7eiqfb3c5fFJJS_t4XcAXjXD_GKAtcCsxZCJWr9dmNEZnWSxmB0mtfFvL9RbwG1covTB69p1ik4k9ROpFgOWyTvejmNyJ-TUwg7dV7iKo",
    },
  ] as const;

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[var(--background)] pb-16 pt-6 md:pt-10">
      {/* Hero */}
      <header className="mx-auto max-w-[1120px] px-6 pb-10 text-center md:pb-14">
        <div className="mb-4 inline-flex items-center rounded-full bg-[rgba(0,88,190,0.1)] px-3 py-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--primary)]">
            AI Recommendations
          </span>
        </div>
        <h1 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          Best tools for your needs
        </h1>
        <p className="mx-auto mb-5 max-w-2xl text-base text-[var(--text-secondary)] md:text-lg">
          {hasQuery ? (
            <>
              We found the best tools for:{" "}
              <span className="font-semibold text-[var(--text-primary)]">&ldquo;{q}&rdquo;</span>
            </>
          ) : (
            <>Run a search from the home page to see tailored picks for your goal.</>
          )}
        </p>
        <Link
          href="/"
          className="link-accent inline-flex items-center justify-center gap-1.5 text-sm font-medium text-[var(--primary)] opacity-90 hover:opacity-100"
        >
          <IconArrowBack className="h-4 w-4" />
          Back to search
        </Link>
      </header>

      {/* Primary recommendation */}
      <section className="mx-auto max-w-[1120px] px-6 pb-12 md:pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(0,88,190,0.14)] bg-[var(--surface)] p-6 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.1)] md:p-10 lg:p-12">
          <div className="absolute right-4 top-4 md:right-6 md:top-6">
            <span className="inline-block rounded-full bg-[var(--primary)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Top Pick
            </span>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="mx-auto flex h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[var(--border)] md:h-32 md:w-32 lg:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={primary.logoSrc}
                alt=""
                className="h-full w-full object-cover"
                width={128}
                height={128}
              />
            </div>

            <div className="min-w-0 flex-1 text-center lg:text-left">
              <div className="mb-2 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
                  {primary.name}
                </h2>
                <span className="inline-flex items-center gap-1 text-[var(--primary)]">
                  <StarIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold text-[var(--text-primary)]">{primary.rating}</span>
                </span>
              </div>
              <p className="mb-5 max-w-xl text-[15px] leading-relaxed text-[var(--text-secondary)] lg:mx-0">
                {primary.description}
              </p>
              <ul className="mb-1 flex flex-wrap justify-center gap-2 lg:justify-start">
                {primary.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg border border-[var(--border)] bg-[#f8fafc] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full flex-col items-center gap-4 border-t border-[var(--border)] pt-6 lg:w-auto lg:border-0 lg:pt-0 lg:pl-2">
              <p className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-1.5 rounded-full border border-[rgba(0,88,190,0.2)] bg-[rgba(0,88,190,0.08)] px-4 py-2 text-center text-sm leading-snug lg:justify-start">
                <span className="shrink-0 text-xs font-bold uppercase tracking-wide text-[var(--primary)]">Best for:</span>
                <span className="font-semibold text-[var(--text-primary)]">{primary.bestFor}</span>
              </p>
              <a
                href={affiliateClickHref(primary.toolId, "recommend-top")}
                className="btn-primary mt-0 w-full min-w-[200px] px-8 py-3.5 text-center text-base font-semibold no-underline md:w-auto"
              >
                Get Started
              </a>
              <p className="text-center text-xs font-semibold text-[var(--text-primary)]">#1 choice for this use case</p>
              <div className="mt-2 flex flex-col items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                <span className="inline-flex items-center gap-1">
                  <span aria-hidden>⭐</span>
                  <span>{primary.rating} rating</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <IconUsers className="h-3.5 w-3.5 shrink-0 opacity-80" />
                  Used by 10,000+ users
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternates */}
      <section className="mx-auto max-w-[1120px] px-6 pb-14 md:pb-20">
        <h3 className="mb-6 text-xl font-semibold tracking-tight text-[var(--text-primary)] md:text-2xl">
          Other good options
        </h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {alternates.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 md:p-5"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-[var(--border)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tool.logoSrc} alt="" className="h-full w-full object-cover" width={44} height={44} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">{tool.name}</h4>
                    <span className="mt-0.5 inline-flex items-center gap-1 text-sm text-[var(--primary)]">
                      <StarIcon className="h-4 w-4" />
                      <span className="font-semibold text-[var(--text-primary)]">{tool.rating}</span>
                    </span>
                  </div>
                </div>
                <span className="shrink-0 rounded bg-[rgba(0,88,190,0.08)] px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[var(--primary)]">
                  {tool.badge}
                </span>
              </div>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{tool.description}</p>
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-[var(--border)] border-opacity-80 pt-4">
                <a
                  href={affiliateClickHref(tool.toolId, "recommend-learn-more", tool.toolId)}
                  className="text-sm font-medium text-[var(--text-secondary)] underline decoration-[var(--border)] decoration-1 underline-offset-4 transition hover:text-[var(--primary)] hover:decoration-[var(--primary)]"
                >
                  Learn more
                </a>
                <a
                  href={affiliateClickHref(tool.toolId, "recommend-alt", tool.toolId)}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 text-sm font-medium text-[var(--text-secondary)] no-underline transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  View Tool
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-[var(--border)] bg-[rgba(0,88,190,0.03)] py-12 md:py-14">
        <div className="mx-auto max-w-[1120px] px-6 text-center">
          <h3 className="mb-3 text-lg font-semibold text-[var(--text-primary)] md:text-xl">Why these recommendations?</h3>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-[15px]">
            We analyze reviews, features, and pricing to recommend the best tools for your needs.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            <div className="flex flex-col items-center opacity-90">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(0,88,190,0.1)] text-[var(--primary)]">
                <IconAnalytics className="h-5 w-5" />
              </div>
              <h4 className="mb-1 text-sm font-semibold text-[var(--text-primary)]">Data-driven</h4>
              <p className="max-w-[220px] text-xs leading-relaxed text-[var(--text-secondary)]">
                Millions of data points analyzed daily
              </p>
            </div>
            <div className="flex flex-col items-center opacity-90">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(0,88,190,0.1)] text-[var(--primary)]">
                <IconUpdate className="h-5 w-5" />
              </div>
              <h4 className="mb-1 text-sm font-semibold text-[var(--text-primary)]">Updated weekly</h4>
              <p className="max-w-[220px] text-xs leading-relaxed text-[var(--text-secondary)]">
                Latest pricing and features reflected
              </p>
            </div>
            <div className="flex flex-col items-center opacity-90">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(0,88,190,0.1)] text-[var(--primary)]">
                <IconUsers className="h-5 w-5" />
              </div>
              <h4 className="mb-1 text-sm font-semibold text-[var(--text-primary)]">Trusted by users</h4>
              <p className="max-w-[220px] text-xs leading-relaxed text-[var(--text-secondary)]">
                Endorsed by teams and independent reviewers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom search */}
      <section className="mx-auto max-w-[1120px] px-6 py-14 text-center md:py-20">
        <h3 className="mb-6 text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
          Not quite right? Find a better match
        </h3>
        <form action="/recommend" method="get" className="mx-auto w-full max-w-3xl">
          <label htmlFor="recommend-refine-q" className="sr-only">
            Search again
          </label>
          <div className="ai-input-container hero-ai-input-focus">
            <div className="flex min-h-[56px] w-full items-center gap-2 px-2.5 py-1.5 sm:gap-3 sm:px-4 sm:py-2">
              <span className="hero-ai-input-prefix" aria-hidden>
                Find
              </span>
              <span className="hero-ai-input-prefix-divider" aria-hidden />
              <div className="relative min-h-[48px] min-w-0 flex-1 py-0.5 pl-2 pr-1 sm:pl-3 sm:pr-1">
                <input
                  id="recommend-refine-q"
                  name="q"
                  type="search"
                  placeholder="e.g. best CRM for small business"
                  className="hero-ai-input w-full min-w-0 bg-transparent py-2.5 text-base text-primary outline-none placeholder:text-[var(--text-secondary)] md:py-3 md:text-lg"
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="hero-ai-submit flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14"
                aria-label="Search"
              >
                <IconSubmitArrow />
              </button>
            </div>
          </div>
        </form>
        <p className="mx-auto mt-5 max-w-3xl text-sm text-[var(--text-secondary)]">
          <span className="font-medium text-[var(--text-primary)]">Try:</span>{" "}
          <Link href="/recommend?q=best%20AI%20tools%20for%20marketing" className="link-accent font-medium">
            best AI tools for marketing
          </Link>
          <span className="mx-1.5 text-[var(--border)]">·</span>
          <Link href="/recommend?q=best%20CRM%20for%20small%20business" className="link-accent font-medium">
            best CRM for small business
          </Link>
          <span className="mx-1.5 text-[var(--border)]">·</span>
          <Link href="/recommend?q=best%20credit%20builder%20apps" className="link-accent font-medium">
            best credit builder apps
          </Link>
        </p>
      </section>
    </div>
  );
}
