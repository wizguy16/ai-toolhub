import { BestDeals } from "@/components/sidebar/BestDeals";
import { SidebarNewsletter } from "@/components/sidebar/SidebarNewsletter";
import { TopTools } from "@/components/sidebar/TopTools";
import { articleList } from "@/lib/articleData";
import Link from "next/link";

export default function PostsIndexPage() {
  const [featured, ...rest] = articleList;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-6">
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:flex-[7] lg:basis-0">
            <header className="max-w-2xl">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Articles
              </h1>
              <p className="text-lg text-secondary">
                Long-form reviews and comparisons to help you choose software
                with confidence.
              </p>
            </header>

            {featured ? (
              <>
                <Link
                  href={`/posts/${featured.slug}`}
                  className="card group block no-underline transition hover:shadow-lg"
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-secondary">
                    Featured
                  </p>
                  <h2 className="text-xl font-bold tracking-tight text-primary md:text-2xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-secondary">
                    {featured.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                    Read article →
                  </span>
                </Link>

                {rest.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {rest.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/posts/${item.slug}`}
                        className="card group flex h-full flex-col no-underline transition hover:shadow-md"
                      >
                        <h2 className="text-lg font-semibold text-primary">
                          {item.title}
                        </h2>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary">
                          {item.excerpt}
                        </p>
                        <span className="mt-4 text-sm font-semibold text-primary">
                          Read article →
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </>
            ) : (
              <p className="text-secondary">No articles yet.</p>
            )}

            <div>
              <Link
                href="/"
                className="text-sm font-semibold text-secondary no-underline underline-offset-4 hover:underline"
              >
                ← Back to home
              </Link>
            </div>
          </div>

          <aside className="min-w-0 lg:flex-[3] lg:basis-0 lg:shrink-0">
            <div className="space-y-6 lg:sticky lg:top-24">
              <TopTools />
              <BestDeals />
              <SidebarNewsletter />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
