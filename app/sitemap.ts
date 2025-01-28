import type { MetadataRoute } from "next"
import { getAllArticles } from "@/lib/api"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.yournewssite.com"

  // Get all articles
  const articles = await getAllArticles()

  // Create article entries
  const articleEntries = articles.map((article) => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Define static pages
  const staticPages = ["", "/about", "/contact", "/privacy-policy", "/terms-of-service"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Combine all entries
  return [...staticPages, ...articleEntries]
}

