import { ArticlePage } from "@/components/article/ArticlePage";
import { isEditorialArticle } from "@/components/article/types";
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
  const description = isEditorialArticle(article)
    ? (article.metaDescription ?? article.subtitle ?? article.title).slice(
        0,
        155,
      )
    : article.intro.slice(0, 155);

  return {
    title: `${article.title} | MyStackTools`,
    description,
    openGraph: { url: `/posts/${id}` },
  };
}

export default async function PostArticlePage({ params }: Props) {
  const { id } = await params;
  const content = getArticleBySlug(id);
  if (!content) {
    notFound();
  }

  return <ArticlePage content={content} slug={id} />;
}
