import { Header } from "@/components/header"
import { ArticleGrid } from "@/components/article-grid"
import { Footer } from "@/components/footer"
import { AdBanner } from "@/components/ad-banner"
import { getAllArticles } from "@/lib/api"

export default async function Home() {
  const articles = await getAllArticles()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <AdBanner className="my-6" />
          <ArticleGrid articles={articles} />
          <AdBanner className="my-6" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

