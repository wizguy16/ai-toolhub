import { ArticlePage } from "@/components/article/ArticlePage";
import { getArticleBySlug } from "@/lib/articleData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleBySlug(id);
  if (!article) {
    return { title: "Article | MyStackTools" };
  }
  return {
    title: `${article.title} | MyStackTools`,
    description: article.intro.slice(0, 155),
    openGraph: { url: `/posts/${id}` },
  };
}

export default async function PostArticlePage({ params }: Props) {
  const { id } = await params;
  const content = getArticleBySlug(id);
  if (!content) {
    notFound();
  }

  return <ArticlePage content={content} />;
}
