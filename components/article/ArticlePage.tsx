import Link from "next/link";
import { StubForm } from "@/components/site/StubForm";
import { ArticleTopPick } from "./ArticleTopPick";
import { ComparisonTable } from "./ComparisonTable";
import { FaqSection } from "./FaqSection";
import { ToolCard } from "./ToolCard";
import type { ArticleContent } from "./types";

type ArticlePageProps = {
  content: ArticleContent;
  /** e.g. "Software Reviews" */
  label?: string;
  updatedLabel?: string;
};

function ArticleNewsletter() {
  return (
    <section className="mb-12 md:mb-16">
      <div className="cta-section flex flex-col items-stretch justify-between gap-8 px-6 py-10 md:flex-row md:items-center md:gap-10 md:px-10 md:py-10">
        <div className="max-w-md">
          <h2 className="cta-title mb-2 text-xl tracking-tight md:text-2xl">
            Get the latest tool insights
          </h2>
          <p className="cta-text text-sm leading-relaxed md:text-base">
            Join 15,000+ builders receiving our weekly breakdown of new tools
            and productivity hacks.
          </p>
        </div>
        <StubForm className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto md:shrink-0">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="sm:w-64 md:w-72"
          />
          <button type="submit" className="btn-primary min-h-[48px] shrink-0">
            Join now
          </button>
        </StubForm>
      </div>
    </section>
  );
}

export function ArticlePage({
  content,
  label = "Software Reviews",
  updatedLabel,
}: ArticlePageProps) {
  const {
    title,
    intro,
    topPick,
    comparisonTable,
    reviews,
    faq,
    verdict,
    recommendQuery,
  } = content;
  const resolvedUpdatedLabel =
    updatedLabel ?? content.updatedLabel ?? "Updated Apr 2026";

  return (
    <div className="min-h-screen bg-[var(--background)] text-primary">
      <main className="mx-auto max-w-[1120px] px-6 py-10 md:py-16 lg:py-20">
        <header className="mb-10 max-w-4xl md:mb-14">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="badge uppercase">{label}</span>
            <span className="text-sm font-medium text-secondary">
              {resolvedUpdatedLabel}
            </span>
          </div>
          <h1 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-primary md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-lg leading-relaxed text-secondary md:text-xl">
            {intro}
          </p>
        </header>

        <ArticleTopPick pick={topPick} />

        {recommendQuery ? (
          <aside className="mb-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 md:mb-12 md:px-6 md:py-5">
            <p className="mb-3 text-sm font-semibold text-primary">
              Want picks tailored to your goal?
            </p>
            <p className="mb-4 text-sm leading-relaxed text-secondary">
              Open the recommendation flow with your search pre-filled, then
              use the tracked tool links when you are ready to try something.
            </p>
            <Link
              href={`/recommend?q=${encodeURIComponent(recommendQuery)}`}
              className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold no-underline"
            >
              🔥 See the best tools for your situation →
            </Link>
          </aside>
        ) : null}

        <ComparisonTable data={comparisonTable} />

        <section className="mb-12 space-y-8 md:mb-16 md:space-y-10">
          {reviews.map((review, i) => (
            <ToolCard key={`${review.name}-${i}`} index={i} review={review} />
          ))}
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-primary md:text-3xl">
            Final verdict
          </h2>
          <div className="card shadow-sm md:!p-10">
            <p className="text-lg leading-relaxed text-secondary md:text-xl">
              {verdict}
            </p>
          </div>
        </section>

        <FaqSection items={faq} />

        {recommendQuery ? (
          <section className="mb-12 md:mb-16">
            <div className="card flex flex-col items-stretch gap-4 px-6 py-8 text-center shadow-sm md:flex-row md:items-center md:justify-between md:px-10 md:py-10 md:text-left">
              <div className="max-w-xl">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-primary md:text-2xl">
                  Not sure which one is right?
                </h2>
                <p className="text-sm leading-relaxed text-secondary md:text-base">
                  Use the recommendation flow with your goal pre-filled—then
                  click through with full click tracking.
                </p>
              </div>
              <Link
                href={`/recommend?q=${encodeURIComponent(recommendQuery)}`}
                className="btn-primary inline-flex shrink-0 items-center justify-center px-6 py-3 text-sm font-semibold no-underline md:text-base"
              >
                Get personalized recommendations →
              </Link>
            </div>
          </section>
        ) : null}

        <ArticleNewsletter />
      </main>
    </div>
  );
}
