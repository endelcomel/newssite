import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Article } from "@/lib/api"

interface ArticleGridProps {
  articles: Article[]
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Card key={article.slug} className="overflow-hidden bg-card">
          <Link href={`/article/${article.slug}`}>
            <div className="aspect-video relative">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2 text-foreground">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 text-sm text-foreground">{article.excerpt}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                {article.date} • {article.readTime}
              </p>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  )
}

