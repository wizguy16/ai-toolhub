import { StubForm } from "@/components/site/StubForm";
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
  updatedLabel = "Updated Oct 2024",
}: ArticlePageProps) {
  const { title, intro, comparisonTable, reviews, faq, verdict } = content;

  return (
    <div className="min-h-screen bg-[var(--background)] text-primary">
      <main className="mx-auto max-w-[1120px] px-6 py-10 md:py-16 lg:py-20">
        <header className="mb-10 max-w-4xl md:mb-14">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="badge uppercase">{label}</span>
            <span className="text-sm font-medium text-secondary">
              {updatedLabel}
            </span>
          </div>
          <h1 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-primary md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-lg leading-relaxed text-secondary md:text-xl">
            {intro}
          </p>
        </header>

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

        <ArticleNewsletter />
      </main>
    </div>
  );
}
