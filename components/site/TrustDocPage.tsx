import Link from "next/link";

type TrustDocPageProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

/**
 * Shared layout for About, Privacy, Contact, and affiliate disclosure pages.
 */
export function TrustDocPage({ title, description, children }: TrustDocPageProps) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="mb-10">
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="text-lg text-secondary">{description}</p>
          ) : null}
        </header>

        <article className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:p-10">
          <div className="space-y-4 text-base leading-relaxed text-secondary [&_a]:font-semibold [&_a]:text-[var(--primary)] [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:first:mt-0 [&_li]:marker:text-[var(--text-secondary)] [&_strong]:text-primary [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </article>

        <p className="mt-10">
          <Link href="/" className="link-quiet text-sm font-semibold no-underline">
            ← Back to home
          </Link>
        </p>
      </main>
    </div>
  );
}
