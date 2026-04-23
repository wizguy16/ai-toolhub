import AffiliateButton from "@/components/AffiliateButton";
import type { ArticleTopPick as ArticleTopPickModel } from "./types";

type Props = {
  pick: ArticleTopPickModel;
};

export function ArticleTopPick({ pick }: Props) {
  const ctaLabel =
    pick.ctaKind === "view-pricing" ? "View Pricing" : "Get Started";

  return (
    <section
      className="mb-10 rounded-xl border-2 border-[var(--primary)]/25 bg-[var(--primary)]/[0.07] px-5 py-6 shadow-sm md:mb-12 md:px-8 md:py-8"
      aria-labelledby="article-top-pick-heading"
    >
      <h2
        id="article-top-pick-heading"
        className="mb-3 text-xl font-bold tracking-tight text-primary md:text-2xl"
      >
        ⭐ Our Top Pick: {pick.name}
      </h2>
      <p className="mb-5 text-base leading-relaxed text-secondary md:text-lg">
        {pick.description}
      </p>
      <ul className="mb-6 list-none space-y-2.5 text-sm leading-relaxed text-primary md:text-base">
        {pick.benefits.map((b) => (
          <li key={b} className="flex gap-2.5">
            <span className="mt-0.5 font-bold text-[var(--primary)]" aria-hidden>
              ✓
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <AffiliateButton
        tool={pick.toolId}
        label={ctaLabel}
        variant="primary"
        className="w-full !py-3.5 text-center sm:w-auto sm:min-w-[200px]"
        source="article"
        pos="top-pick"
        linkTitle="Opens in a new tab"
      />
    </section>
  );
}
