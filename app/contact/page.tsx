import type { Metadata } from "next";
import { TrustDocPage } from "@/components/site/TrustDocPage";

export const metadata: Metadata = {
  title: "Contact | MyStackTools",
  description: "Get in touch with MyStackTools for questions, feedback, or partnership inquiries.",
};

const CONTACT_EMAIL = "hello@mystacktools.com";

export default function ContactPage() {
  return (
    <TrustDocPage
      title="Contact"
      description="We read every message and aim to reply when a response is needed."
    >
      <p>
        For general questions, corrections to our content, or business inquiries,
        send us an email at the address below.
      </p>
      <p>
        <strong className="text-primary">Email:</strong>{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <h2>What to include</h2>
      <ul>
        <li>URL of the page you are writing about</li>
        <li>A short description of your question or the fix you suggest</li>
        <li>Whether you are okay with us following up by email</li>
      </ul>
      <p>
        We are not able to provide legal, financial, or personalized product
        support for third-party tools; for those issues, contact the vendor
        directly.
      </p>
    </TrustDocPage>
  );
}
