import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Rise of Sustainable Tourism in Ohio | News Site",
  description:
    "Discover how Ohio is leading the way in eco-friendly travel experiences. Learn about green hotels, sustainable attractions, and responsible tourism in the Buckeye State.",
  openGraph: {
    title: "The Rise of Sustainable Tourism in Ohio",
    description:
      "Discover how Ohio is leading the way in eco-friendly travel experiences. Learn about green hotels, sustainable attractions, and responsible tourism in the Buckeye State.",
    images: [{ url: "https://tsel.mm.bing.net/th?q=Sustainable+Tourism+in+Ohio" }],
  },
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

