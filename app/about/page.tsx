import type { Metadata } from "next";
import Link from "next/link";
import { TrustDocPage } from "@/components/site/TrustDocPage";

export const metadata: Metadata = {
  title: "About Us | MyStackTools",
  description:
    "MyStackTools helps you discover, compare, and choose software and AI tools with clear, practical guidance.",
};

export default function AboutPage() {
  return (
    <TrustDocPage
      title="About MyStackTools"
      description="Independent guidance for picking the right tools—without the noise."
    >
      <p>
        MyStackTools is a resource for builders, teams, and individuals who want
        to find software and AI products that actually fit their workflow. We
        focus on helping you compare options side by side and understand what
        matters before you commit time or budget.
      </p>
      <p>
        Our articles and listings highlight strengths, tradeoffs, and typical use
        cases so you can shortlist faster and decide with more confidence. We aim
        for clarity and accuracy; when something is opinion or may vary by plan,
        we say so.
      </p>
      <h2>Editorial approach</h2>
      <p>
        Content is written for readers first. Recommendations reflect how tools
        tend to perform in the real world, not hype. Where we use partner links,
        they are labeled in line with our{" "}
        <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>
      <h2>Contact</h2>
      <p>
        Questions or corrections? Reach us on our{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </TrustDocPage>
  );
}
