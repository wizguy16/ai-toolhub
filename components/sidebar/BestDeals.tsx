import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";
import type { AffiliateId } from "@/lib/affiliates";

type Deal = {
  name: string;
  price: string;
  cta: string;
} & (
  | { affiliateTool: AffiliateId; href?: undefined; external?: undefined }
  | { href: string; external: boolean; affiliateTool?: undefined }
);

const deals: Deal[] = [
  {
    name: "Asana",
    price: "From $10.99/user/mo",
    affiliateTool: "asana",
    cta: "View deal",
  },
  {
    name: "Monday.com",
    price: "From $9/user/mo",
    affiliateTool: "monday",
    cta: "View deal",
  },
  {
    name: "Linear",
    price: "From $8/user/mo",
    href: "/posts/pm-tools",
    external: false,
    cta: "See breakdown",
  },
];

function DealCta({ deal, index }: { deal: Deal; index: number }) {
  const className =
    "btn-secondary inline-flex w-full items-center justify-center text-center text-sm no-underline";

  if ("affiliateTool" in deal && deal.affiliateTool) {
    return (
      <AffiliateButton
        tool={deal.affiliateTool}
        label={deal.cta}
        variant="outline"
        className={className}
        source="sidebar-best-deals"
        pos={`deal-${index + 1}`}
        linkTitle="Opens in a new tab"
      />
    );
  }

  if (deal.external) {
    return (
      <a href={deal.href} className={className}>
        {deal.cta}
      </a>
    );
  }

  return (
    <Link href={deal.href} className={className}>
      {deal.cta}
    </Link>
  );
}

export function BestDeals() {
  return (
    <div className="card space-y-5">
      <h2 className="text-lg font-semibold tracking-tight text-primary">
        Best Deals
      </h2>
      <ul className="m-0 list-none space-y-4 p-0">
        {deals.map((deal, index) => (
          <li
            key={deal.name}
            className={
              index > 0
                ? "border-t border-[var(--border)] pt-4"
                : undefined
            }
          >
            <div className="flex flex-col gap-3">
              <div>
                <p className="flex flex-wrap items-center gap-2 font-semibold text-primary">
                  {"affiliateTool" in deal && deal.affiliateTool ? (
                    <span className="rounded bg-[var(--primary)]/12 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--primary)]">
                      Save
                    </span>
                  ) : null}
                  {deal.name}
                </p>
                <p className="mt-1 text-sm text-secondary">{deal.price}</p>
              </div>
              <DealCta deal={deal} index={index} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
