import type { Metadata } from "next";
import Link from "next/link";
import { TrustDocPage } from "@/components/site/TrustDocPage";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | MyStackTools",
  description:
    "How MyStackTools uses affiliate links and how that may affect you when you click or purchase.",
};

export default function AffiliateDisclosurePage() {
  return (
    <TrustDocPage
      title="Affiliate Disclosure"
      description="Transparency about how MyStackTools may earn compensation."
    >
      <p>
        We may earn commissions when you click links and make purchases or sign
        up for services through our partner programs. Those commissions help fund
        the site at no extra cost to you when the merchant&apos;s program is
        structured that way.
      </p>
      <p>
        Affiliate relationships do not determine our editorial conclusions. We
        still aim for accurate, reader-first comparisons and reviews. If a tool
        is not a good fit, we say so—even when a partner link is available.
      </p>
      <h2>What you should know</h2>
      <ul>
        <li>
          Not every outbound link is an affiliate link, but some are; assume
          partner links may be present on comparison tables, &quot;visit
          site&quot; buttons, and similar CTAs.
        </li>
        <li>
          Prices, features, and offers change frequently. Always confirm details
          on the vendor&apos;s official site before you buy.
        </li>
        <li>
          MyStackTools is not responsible for third-party products, billing, or
          support. Your relationship is with the provider you choose.
        </li>
      </ul>
      <h2>Questions</h2>
      <p>
        For more about how we work, see{" "}
        <Link href="/about">About MyStackTools</Link> or{" "}
        <Link href="/contact">contact us</Link>.
      </p>
    </TrustDocPage>
  );
}
