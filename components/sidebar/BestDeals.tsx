import AffiliateButton from "@/components/AffiliateButton";
import type { AffiliateId } from "@/lib/affiliates";

type Deal = {
  name: string;
  teaser: string;
  affiliateTool: AffiliateId;
};

const deals: Deal[] = [
  {
    name: "Credit Strong",
    teaser: "Structured plans for steady payment history",
    affiliateTool: "creditstrong",
  },
  {
    name: "Jasper",
    teaser: "Flexible pricing for growing teams",
    affiliateTool: "jasper",
  },
  {
    name: "Monday.com",
    teaser: "Visual workflows that scale with your ops",
    affiliateTool: "monday",
  },
];

export function BestDeals() {
  return (
    <div className="rounded-[var(--radius)] border-2 border-[var(--primary)]/15 bg-[var(--surface)] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.07)] transition duration-200 hover:shadow-[0_10px_28px_rgba(0,0,0,0.1)]">
      <h2 className="mb-5 text-lg font-semibold tracking-tight text-primary">
        Best deals
      </h2>
      <ul className="m-0 list-none space-y-0 p-0">
        {deals.map((deal, index) => (
          <li
            key={deal.name}
            className={
              index > 0 ? "border-t border-[var(--border)] pt-4 mt-4" : undefined
            }
          >
            <div className="flex flex-col gap-3 rounded-xl bg-[var(--background)] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="font-semibold text-primary">{deal.name}</p>
                <p className="mt-1 text-xs font-medium text-[var(--success)]">
                  {deal.teaser}
                </p>
              </div>
              <AffiliateButton
                tool={deal.affiliateTool}
                label="View deal"
                variant="outline"
                className="btn-secondary inline-flex w-full shrink-0 items-center justify-center text-center text-sm no-underline sm:w-auto sm:min-w-[7.5rem]"
                source="sidebar-best-deals"
                pos={`deal-${index + 1}`}
                linkTitle="Opens in a new tab"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
