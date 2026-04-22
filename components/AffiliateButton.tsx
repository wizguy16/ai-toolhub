"use client";

import { affiliates, type AffiliateId } from "@/lib/affiliates";
import type { ClickSource } from "@/lib/clickSource";
import { ExternalLinkGlyph } from "@/components/icons/ExternalLinkGlyph";
import { useAffiliateLinkProps } from "@/lib/useAffiliateLinkProps";

const base =
  "inline-flex cursor-pointer items-center justify-center text-sm font-semibold no-underline transition active:scale-[0.98] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]";

type Variant = "primary" | "outline";

function variantClass(variant: Variant) {
  return variant === "primary"
    ? "btn-primary"
    : "btn-secondary !border-2 !border-[var(--primary)] !font-semibold !text-[var(--primary)] hover:!bg-[var(--primary)]/10";
}

function AffiliateButtonTracked({
  tool,
  source,
  pos,
  linkTitle,
  label,
  variant,
  className,
  showExternalIcon,
}: {
  tool: AffiliateId;
  source?: ClickSource;
  pos?: string;
  linkTitle?: string;
  label: string;
  variant: Variant;
  className: string;
  showExternalIcon: boolean;
}) {
  const link = useAffiliateLinkProps(tool, source, pos, linkTitle);
  const cls = `${base} ${variantClass(variant)} ${className}`.trim();
  return (
    <a {...link} className={cls}>
      {showExternalIcon ? (
        <span className="inline-flex items-center gap-1.5">
          {label}
          <ExternalLinkGlyph className="shrink-0 opacity-80" />
        </span>
      ) : (
        label
      )}
    </a>
  );
}

export default function AffiliateButton({
  tool,
  label = "Try Now",
  variant = "primary",
  className = "",
  trackClicks = true,
  source,
  pos,
  linkTitle,
  showExternalIcon = true,
}: {
  tool: AffiliateId;
  label?: string;
  variant?: Variant;
  className?: string;
  trackClicks?: boolean;
  source?: ClickSource;
  pos?: string;
  /** Native tooltip on hover, e.g. `Opens in a new tab` */
  linkTitle?: string;
  /** Small outbound affordance on tracked links */
  showExternalIcon?: boolean;
}) {
  const data = affiliates[tool];
  if (!data) return null;

  const cls = `${base} ${variantClass(variant)} ${className}`.trim();

  if (!trackClicks) {
    return (
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={cls}
        title={linkTitle}
        onClick={() => {
          console.log("Clicked:", tool, source, pos);
        }}
      >
        {showExternalIcon ? (
          <span className="inline-flex items-center gap-1.5">
            {label}
            <ExternalLinkGlyph className="shrink-0 opacity-80" />
          </span>
        ) : (
          label
        )}
      </a>
    );
  }

  return (
    <AffiliateButtonTracked
      tool={tool}
      source={source}
      pos={pos}
      linkTitle={linkTitle}
      label={label}
      variant={variant}
      className={className}
      showExternalIcon={showExternalIcon}
    />
  );
}
