import Link from "next/link";

type Props = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function RecommendPage({ searchParams }: Props) {
  const sp = await searchParams;
  const raw = sp.q;
  const q = typeof raw === "string" ? raw.trim() : Array.isArray(raw) ? raw[0]?.trim() ?? "" : "";

  return (
    <div className="min-h-screen bg-[var(--background)] text-primary">
      <main className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
          Recommendations
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl">
          {q ? "Here’s your starting point" : "Ask us what you need"}
        </h1>
        {q ? (
          <p className="mb-8 text-lg text-secondary">
            We received: <span className="font-medium text-primary">&ldquo;{q}&rdquo;</span>
          </p>
        ) : (
          <p className="mb-8 text-lg text-secondary">
            Go back to the home page and describe your goal — we&apos;ll route your query here and build out matching tools next.
          </p>
        )}
        <Link href="/" className="btn-primary inline-flex no-underline">
          ← Back to search
        </Link>
      </main>
    </div>
  );
}
