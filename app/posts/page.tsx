import { BestDeals } from "@/components/sidebar/BestDeals";
import { SidebarNewsletter } from "@/components/sidebar/SidebarNewsletter";
import { TopTools } from "@/components/sidebar/TopTools";
import { articleList } from "@/lib/articleData";
import Image from "next/image";
import Link from "next/link";

const articleCardClass =
  "group block overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] no-underline shadow-[0_4px_14px_rgba(0,0,0,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)]";

const pillClass =
  "inline-block rounded-full bg-[var(--primary)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--primary)]";

const categoryPillClass =
  "mb-3 inline-block rounded-full bg-[var(--background)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-secondary";

export default function PostsIndexPage() {
  const [featured, ...rest] = articleList;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-[1120px] px-6 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
          <div className="flex min-w-0 flex-1 flex-col gap-8 lg:flex-[7] lg:basis-0">
            <header className="max-w-2xl">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Articles
              </h1>
              <p className="text-lg text-secondary">
                Curated comparisons and buying guides from MyStackTools—pick
                software that fits your stack, not the loudest landing page.
              </p>
            </header>

            {featured ? (
              <>
                <Link href={`/posts/${featured.slug}`} className={articleCardClass}>
                  <div className="relative aspect-[21/9] w-full overflow-hidden">
                    <Image
                      src={featured.coverImage}
                      alt={`Hero image for: ${featured.title}`}
                      fill
                      sizes="(min-width: 1024px) 760px, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className={pillClass}>Editor&apos;s Pick</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-primary transition-colors duration-200 group-hover:text-[var(--primary)] md:text-2xl">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-secondary">
                      {featured.featuredLead ?? featured.excerpt}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-primary">
                      By MyStackTools Editorial Team
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--primary)]">
                      Read article →
                    </span>
                  </div>
                </Link>

                {rest.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {rest.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/posts/${item.slug}`}
                        className={`${articleCardClass} flex h-full flex-col`}
                      >
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            src={item.coverImage}
                            alt={`Thumbnail for: ${item.title}`}
                            fill
                            sizes="(min-width: 768px) 360px, 100vw"
                            className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <span className={categoryPillClass}>{item.category}</span>
                          <h2 className="text-lg font-semibold text-primary transition-colors duration-200 group-hover:text-[var(--primary)]">
                            {item.title}
                          </h2>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary line-clamp-3">
                            {item.excerpt}
                          </p>
                          <span className="mt-4 text-sm font-semibold text-[var(--primary)]">
                            Read article →
                          </span>
                        </div>
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
                className="link-quiet text-sm font-semibold no-underline"
              >
                ← Back to home
              </Link>
            </div>
          </div>

          <aside className="min-w-0 lg:flex-[3] lg:basis-0 lg:shrink-0">
            <div className="space-y-6 lg:sticky lg:top-24">
              <TopTools />
              <SidebarNewsletter />
              <BestDeals />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
