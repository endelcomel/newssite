import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

export interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  image: string
}

export async function getAllArticles(): Promise<Article[]> {
  const keys = await MY_BUCKET.list()
  const articles = await Promise.all(
    keys.objects.map(async (key) => {
      const article = await getArticleBySlug(key.name)
      return article
    }),
  )
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const fileContents = await MY_BUCKET.get(slug)
  const { data, content } = matter(await fileContents.text())

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    content: contentHtml,
    date: data.date,
    readTime: data.readTime,
    image: data.image,
  }
}

