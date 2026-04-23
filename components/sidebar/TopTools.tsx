import Link from "next/link";
import { AffiliateAnchor } from "@/components/AffiliateAnchor";
import type { ToolId } from "@/lib/tools";

type TopToolRow =
  | {
      kind: "affiliate";
      name: string;
      benefit: string;
      cta: string;
      tool: ToolId;
      pos: string;
    }
  | {
      kind: "internal";
      name: string;
      benefit: string;
      cta: string;
      href: string;
    };

/** Registry-only picks: credit, AI, PM (see `lib/tools.ts`). */
const topToolRows: TopToolRow[] = [
  {
    kind: "affiliate",
    name: "Credit Strong",
    benefit: "Structured credit building you can put on autopay.",
    cta: "View pricing",
    tool: "creditstrong",
    pos: "sidebar-top-1",
  },
  {
    kind: "internal",
    name: "Jasper",
    benefit: "Marketing copy at scale with brand guardrails.",
    cta: "Read review",
    href: "/posts/best-ai-writing-tools-marketing",
  },
  {
    kind: "internal",
    name: "Notion",
    benefit: "Docs, wikis, and light project tracking in one place.",
    cta: "Read review",
    href: "/posts/pm-tools",
  },
];

export function TopTools() {
  return (
    <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.07)] transition duration-200 hover:shadow-[0_10px_28px_rgba(0,0,0,0.1)]">
      <h2 className="mb-5 text-lg font-semibold tracking-tight text-primary">
        Top tools right now
      </h2>
      <ul className="m-0 list-none space-y-0 p-0">
        {topToolRows.map((row, index) => (
          <li
            key={row.name}
            className={
              index > 0 ? "border-t border-[var(--border)] pt-4 mt-4" : undefined
            }
          >
            {row.kind === "affiliate" ? (
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold text-primary">{row.name}</p>
                  <p className="mt-1 text-sm leading-snug text-secondary">
                    {row.benefit}
                  </p>
                </div>
                <AffiliateAnchor
                  tool={row.tool}
                  source="sidebar-top-tools"
                  pos={row.pos}
                  title="Opens in a new tab"
                  className="shrink-0 text-sm font-semibold text-[var(--primary)] no-underline hover:underline"
                >
                  {row.cta}
                </AffiliateAnchor>
              </div>
            ) : (
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold text-primary">{row.name}</p>
                  <p className="mt-1 text-sm leading-snug text-secondary">
                    {row.benefit}
                  </p>
                </div>
                <Link
                  href={row.href}
                  className="shrink-0 text-sm font-semibold text-[var(--primary)] no-underline hover:underline"
                >
                  {row.cta}
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
