import Image from "next/image";
import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";
import { affiliateToolMapByName } from "@/lib/affiliates";
import { CTAButton } from "./CTAButton";
import { ProsCons } from "./ProsCons";
import { StarRating } from "./StarRating";
import type { ToolReview } from "./types";

type ToolCardProps = {
  index: number;
  review: ToolReview;
};

function ScoreBar({ label, value }: { label: string; value: number }) {
  const pct = Math.min(100, Math.max(0, Math.round(value)));
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="font-semibold text-primary">{label}</span>
      <div className="h-1.5 w-28 shrink-0 overflow-hidden rounded-full bg-[var(--border)] md:w-32">
        <div
          className="h-full rounded-full bg-[var(--primary)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function ToolCard({ index, review }: ToolCardProps) {
  const {
    name,
    headline,
    description,
    pros,
    cons,
    cta,
    affiliateKey,
    rating,
    badge,
    imageSrc,
    scoreEase = 88,
    scoreFeatures = 85,
    scoreValue = 82,
    conversionSummary,
  } = review;

  const resolvedAffiliate =
    affiliateKey ?? affiliateToolMapByName[name] ?? undefined;

  const ratingLabel = rating ?? "4.5/5.0";

  return (
    <article
      id={`review-${index + 1}`}
      className="card shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/3">
          <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-[var(--background)] shadow-inner">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`${name} product`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--text-primary)] via-[#152a45] to-[var(--text-primary)]" />
                <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_30%_20%,rgba(0,88,190,0.45),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(0,88,190,0.2),transparent_45%)]" />
                <div className="absolute inset-x-4 bottom-4 top-1/3 rounded-md border border-[var(--surface)]/20 bg-[var(--text-primary)]/55 backdrop-blur-sm" />
              </>
            )}
          </div>
          <div className="space-y-2">
            <ScoreBar label="Ease of Use" value={scoreEase} />
            <ScoreBar label="Features" value={scoreFeatures} />
            <ScoreBar label="Value" value={scoreValue} />
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold leading-snug tracking-tight text-primary md:text-2xl md:leading-tight">
                {index + 1}. {name}
                {headline ? (
                  <>
                    :{" "}
                    <span className="text-primary opacity-90">{headline}</span>
                  </>
                ) : null}
              </h3>
              <div className="mt-2">
                <StarRating ratingLabel={ratingLabel} />
              </div>
            </div>
            {badge ? (
              <span className="badge w-fit shrink-0 uppercase">{badge}</span>
            ) : null}
          </div>

          <p className="mb-6 cursor-default text-base leading-relaxed text-secondary">
            {description}
          </p>

          <div className="mb-6">
            <ProsCons pros={pros} cons={cons} />
          </div>

          {conversionSummary ? (
            <div className="mb-6 rounded-lg border border-[var(--border)] bg-[var(--surface)]/80 px-4 py-4 md:px-5 md:py-5">
              <p className="mb-4 text-sm leading-relaxed text-secondary md:text-base">
                {conversionSummary}
              </p>
              {resolvedAffiliate ? (
                <AffiliateButton
                  tool={resolvedAffiliate}
                  label={`Get Started with ${name} →`}
                  variant="primary"
                  className="w-full !py-3 sm:w-auto"
                  source="article"
                  pos={`rev-${index + 1}`}
                  linkTitle="Opens in a new tab"
                />
              ) : (
                <Link
                  href="/tools"
                  className="btn-primary inline-flex w-full items-center justify-center !py-3 text-center text-sm font-semibold no-underline sm:w-auto"
                >
                  {`Get Started with ${name} →`}
                </Link>
              )}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            {!conversionSummary ? (
              resolvedAffiliate ? (
                <AffiliateButton
                  tool={resolvedAffiliate}
                  label={cta}
                  variant="primary"
                  className="flex-1 !py-3"
                  source="article"
                  pos={`rev-${index + 1}`}
                  linkTitle="Opens in a new tab"
                />
              ) : (
                <Link
                  href="/tools"
                  className="btn-primary inline-flex flex-1 items-center justify-center !py-3 text-center text-sm font-semibold no-underline"
                >
                  {cta}
                </Link>
              )
            ) : null}
            <CTAButton
              href="#article-comparison"
              variant="outline"
              className="flex-1 !py-3 !font-semibold"
            >
              Compare in table
            </CTAButton>
          </div>
        </div>
      </div>
    </article>
  );
}
