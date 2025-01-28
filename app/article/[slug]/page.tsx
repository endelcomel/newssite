import { getArticleBySlug } from "@/lib/api"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdBanner } from "@/components/ad-banner"
import Image from "next/image"
import Link from "next/link"

export async function generateMetadata({ params }) {
  const article = await getArticleBySlug(params.slug)
  if (!article) return {}

  return {
    title: `${article.title} | News Site`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  }
}

export default async function ArticlePage({ params }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-6">
          <h1 className="mb-4 text-3xl font-bold text-foreground">{article.title}</h1>
          <div className="mb-4 text-sm text-muted-foreground">
            Published on {article.date} • {article.readTime}
          </div>
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={800}
            height={400}
            className="mb-6 rounded-lg"
          />
          <AdBanner className="my-6" />
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          <AdBanner className="my-6" />
        </article>
      </main>
      <Footer />
    </div>
  )
}

