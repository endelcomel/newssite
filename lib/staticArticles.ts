import { getAllArticles } from "./api"

export async function getStaticArticles() {
  const allArticles = await getAllArticles()
  return allArticles
}

