import AffiliateButton from "@/components/AffiliateButton";
import { CTAButton } from "./CTAButton";
import { parseRatingScore, StarRating } from "./StarRating";
import type { ComparisonTableData } from "./types";

type ComparisonTableProps = {
  data: ComparisonTableData;
  title?: string;
};

function isRatingHeader(h: string) {
  return h.toLowerCase().includes("rating");
}

function isActionHeader(h: string) {
  const l = h.toLowerCase();
  return l.includes("action") || l.includes("cta");
}

function rowLooksPrimaryAction(label: string) {
  const l = label.toLowerCase();
  return l.includes("try") || l.includes("visit") || l.includes("get");
}

function actionVariant(label: string): "primary" | "outline" {
  return rowLooksPrimaryAction(label) ? "primary" : "outline";
}

export function ComparisonTable({
  data,
  title = "Quick Comparison",
}: ComparisonTableProps) {
  const { headers, rows, rowAffiliateIds } = data;

  return (
    <section id="article-comparison" className="mb-12 scroll-mt-24 md:mb-16">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-primary md:text-3xl">
        {title}
      </h2>
      <div className="card !p-0 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--background)]">
                {headers.map((h) => (
                  <th
                    key={h}
                    className={`px-4 py-3 text-xs font-bold uppercase tracking-wide text-secondary md:px-6 md:py-4 ${
                      isActionHeader(h) ? "text-right" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={`border-b border-[var(--border)] last:border-b-0 ${
                    ri === 0
                      ? "bg-[var(--primary)]/[0.06]"
                      : "bg-[var(--surface)]"
                  }`}
                >
                  {row.map((cell, ci) => {
                    const header = headers[ci] ?? "";
                    const isFirst = ci === 0;
                    const isRating = isRatingHeader(header);
                    const isAction = isActionHeader(header);

                    if (isRating) {
                      const score = parseRatingScore(cell);
                      const label =
                        cell.includes("/") || cell.trim().length > 0
                          ? cell
                          : `${score}/5.0`;
                      return (
                        <td key={ci} className="px-4 py-3 md:px-6 md:py-4">
                          <StarRating ratingLabel={label} />
                        </td>
                      );
                    }

                    if (isAction) {
                      const affiliateTool = rowAffiliateIds?.[ri];
                      const v = actionVariant(cell);
                      return (
                        <td
                          key={ci}
                          className="px-4 py-3 text-right md:px-6 md:py-4"
                        >
                          {affiliateTool ? (
                            <AffiliateButton
                              tool={affiliateTool}
                              label={cell}
                              variant={v}
                              className="whitespace-nowrap !px-3 !py-2 text-xs md:text-sm"
                              source="article"
                              pos={`cmp-${ri + 1}`}
                              linkTitle="Opens in a new tab"
                            />
                          ) : (
                            <CTAButton
                              type="button"
                              variant={v}
                              className="whitespace-nowrap !px-3 !py-2 text-xs md:text-sm"
                            >
                              {cell}
                            </CTAButton>
                          )}
                        </td>
                      );
                    }

                    if (isFirst) {
                      const initial = cell.trim().charAt(0).toUpperCase() || "?";
                      return (
                        <td key={ci} className="px-4 py-3 md:px-6 md:py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-[var(--surface)] ${
                                ri === 0
                                  ? "bg-[var(--primary)]"
                                  : "bg-[var(--text-secondary)]"
                              }`}
                            >
                              {initial}
                            </div>
                            <div>
                              <div className="font-semibold text-primary">
                                {cell}
                              </div>
                              {ri === 0 ? (
                                <div className="text-xs font-bold text-[var(--primary)]">
                                  EDITOR&apos;S CHOICE
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </td>
                      );
                    }

                    return (
                      <td
                        key={ci}
                        className="px-4 py-3 text-sm text-secondary md:px-6 md:py-4 md:text-base"
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
