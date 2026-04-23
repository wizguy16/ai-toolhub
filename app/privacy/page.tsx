import type { Metadata } from "next";
import Link from "next/link";
import { TrustDocPage } from "@/components/site/TrustDocPage";

export const metadata: Metadata = {
  title: "Privacy Policy | MyStackTools",
  description:
    "How MyStackTools collects, uses, and protects information when you use our site.",
};

export default function PrivacyPage() {
  return (
    <TrustDocPage
      title="Privacy Policy"
      description="How we handle information when you use MyStackTools."
    >
      <p className="text-sm text-secondary">
        <strong className="text-primary">Last updated:</strong> April 23, 2026
      </p>
      <p>
        This policy describes how MyStackTools (&quot;we,&quot; &quot;us&quot;)
        treats information when you visit mystacktools.com and related pages
        (the &quot;Site&quot;). By using the Site, you agree to this policy. If
        you do not agree, please do not use the Site.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Usage data:</strong> pages viewed, approximate region (from IP
          where available), browser type, device type, and timestamps. We use
          this to understand traffic, fix issues, and improve content.
        </li>
        <li>
          <strong>Technical logs:</strong> standard server or hosting logs may
          record requests and errors for security and reliability.
        </li>
        <li>
          <strong>What you send us:</strong> if you email us, we receive the
          contents of your message and your email address so we can respond.
        </li>
      </ul>

      <h2>Cookies and analytics</h2>
      <p>
        We may use cookies and similar technologies (including local storage) to
        keep the Site working, remember preferences, and measure performance.
        Analytics tools may set their own cookies and process aggregated or
        pseudonymous data about how visitors use the Site. You can control
        cookies through your browser settings; blocking some cookies may limit
        certain features.
      </p>

      <h2>How we use information</h2>
      <p>
        We use the information above to operate and improve the Site, analyze
        trends, protect against abuse, and comply with law. We do not sell your
        personal information as a standalone product.
      </p>

      <h2>Third parties</h2>
      <p>
        Hosting, analytics, and affiliate partners may process data on our behalf
        according to their own policies. Outbound links (including affiliate
        links) are governed by the destination site&apos;s privacy practices once
        you leave MyStackTools.
      </p>

      <h2>Retention</h2>
      <p>
        We keep information only as long as needed for the purposes above,
        unless a longer period is required by law.
      </p>

      <h2>Your choices</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, or
        delete personal information we hold, or to object to certain processing.
        Contact us and we will respond within a reasonable time.
      </p>

      <h2>Children</h2>
      <p>
        The Site is not directed at children under 16, and we do not knowingly
        collect personal information from them.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The &quot;Last updated&quot;
        date at the top will change when we do. Continued use of the Site after
        changes means you accept the revised policy.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy-related questions, use the details on our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </TrustDocPage>
  );
}
