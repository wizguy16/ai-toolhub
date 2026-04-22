import Link from "next/link";
import { AffiliateAnchor } from "@/components/AffiliateAnchor";
import type { AffiliateId } from "@/lib/affiliates";

type ToolRow = {
  name: string;
  label: string;
  cta: string;
  variant: "primary" | "secondary";
} & (
  | { href: string; affiliateTool?: undefined }
  | { affiliateTool: AffiliateId; href?: undefined }
);

function IconRowChevron({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={20}
      height={20}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

const topToolRows: ToolRow[] = [
  {
    name: "Linear",
    label: "Best for fast-moving engineering teams",
    href: "/posts/pm-tools",
    cta: "Read review",
    variant: "primary",
  },
  {
    name: "Notion AI",
    label: "Best for beginners",
    href: "/tools",
    cta: "See tools",
    variant: "secondary",
  },
  {
    name: "Self",
    label: "Best for credit-building workflows",
    affiliateTool: "self",
    cta: "See pricing",
    variant: "secondary",
  },
];

export function TopTools() {
  return (
    <div className="card space-y-5">
      <h2 className="text-lg font-semibold tracking-tight text-primary">
        Top Tools Right Now
      </h2>
      <ul className="m-0 list-none space-y-5 p-0">
        {topToolRows.map((tool, index) => (
          <li
            key={tool.name}
            className={
              index > 0
                ? "border-t border-[var(--border)] pt-5"
                : undefined
            }
          >
            {"affiliateTool" in tool && tool.affiliateTool ? (
              <AffiliateAnchor
                tool={tool.affiliateTool}
                source="sidebar-top-tools"
                pos={`row-${index + 1}`}
                title="Opens in a new tab"
                className="block rounded-xl no-underline outline-none ring-offset-2 transition hover:bg-[var(--background)] focus-visible:ring-2 focus-visible:ring-[var(--primary)] hover:no-underline"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1 space-y-3">
                    <div>
                      <p className="font-semibold text-primary">{tool.name}</p>
                      <p className="mt-1 text-sm leading-snug text-secondary">
                        {tool.label}
                      </p>
                    </div>
                    <span
                      className={
                        tool.variant === "primary"
                          ? "btn-primary inline-flex w-full items-center justify-center py-2.5 text-center text-sm font-semibold"
                          : "btn-secondary inline-flex w-full items-center justify-center border-2 border-[var(--primary)] py-2.5 text-center text-sm font-semibold text-[var(--primary)]"
                      }
                    >
                      {tool.cta}
                    </span>
                  </div>
                  <IconRowChevron className="mt-1 shrink-0 text-secondary" />
                </div>
              </AffiliateAnchor>
            ) : (
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-primary">{tool.name}</p>
                  <p className="mt-1 text-sm leading-snug text-secondary">
                    {tool.label}
                  </p>
                </div>
                <Link
                  href={tool.href!}
                  className={
                    tool.variant === "primary"
                      ? "btn-primary inline-flex w-full items-center justify-center text-center text-sm no-underline"
                      : "btn-secondary inline-flex w-full items-center justify-center text-center text-sm no-underline"
                  }
                >
                  {tool.cta}
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
