"use client";

import type { ReactNode } from "react";
import type { ClickSource } from "@/lib/clickSource";
import { useAffiliateLinkProps } from "@/lib/useAffiliateLinkProps";
import type { ToolId } from "@/lib/tools";

type Props = {
  tool: ToolId;
  source?: ClickSource;
  /** Slot id for conversion analytics, e.g. `card-jasper` */
  pos?: string;
  /** e.g. `Opens in a new tab` for hover tooltip */
  title?: string;
  className?: string;
  children: ReactNode;
};

/** Full-card or inline `<a>` through `/api/click` with the same behavior as `AffiliateButton`. */
export function AffiliateAnchor({
  tool,
  source,
  pos,
  title,
  className,
  children,
}: Props) {
  const link = useAffiliateLinkProps(tool, source, pos, title);
  return (
    <a {...link} className={className}>
      {children}
    </a>
  );
}
