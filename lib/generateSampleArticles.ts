import type { Article } from "./api"

const topics = [
  "Technology",
  "Science",
  "Health",
  "Environment",
  "Politics",
  "Economy",
  "Education",
  "Culture",
  "Sports",
  "Entertainment",
]

function generateRandomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split("T")[0]
}

export function generateSampleArticles(count: number): Article[] {
  return Array.from({ length: count }, (_, i) => ({
    slug: `sample-article-${i + 1}`,
    title: `Sample Article ${i + 1}: ${topics[i % topics.length]} News`,
    excerpt: `This is a brief excerpt for sample article ${i + 1} about ${topics[i % topics.length].toLowerCase()}.`,
    content: `<p>This is the full content for sample article ${i + 1}. It would contain more detailed information about ${topics[i % topics.length].toLowerCase()}.</p>`,
    date: generateRandomDate(new Date(2024, 0, 1), new Date()),
    readTime: `${Math.floor(Math.random() * 10) + 2} min read`,
    image: `https://picsum.photos/seed/${i + 1}/800/600`,
  }))
}

