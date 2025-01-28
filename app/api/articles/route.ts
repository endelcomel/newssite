import { type NextRequest, NextResponse } from "next/server"
import { getAllArticles } from "@/lib/api"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = Number.parseInt(searchParams.get("page") || "1", 10)
  const limit = Number.parseInt(searchParams.get("limit") || "6", 10)

  const allArticles = await getAllArticles()
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  const paginatedArticles = allArticles.slice(startIndex, endIndex)

  return NextResponse.json(paginatedArticles)
}

