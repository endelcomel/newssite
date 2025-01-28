import { getAssetFromKV } from "@cloudflare/kv-asset-handler"
import manifestJSON from "__STATIC_CONTENT_MANIFEST"
import { createServer } from "@vercel/node-bridge"
import { parse } from "url"

const assetManifest = JSON.parse(manifestJSON)
const server = createServer((req) => require("./.next/standalone/server.js")(req))

async function handleEvent(event) {
  const url = new URL(event.request.url)
  const { pathname } = parse(url.toString())

  try {
    // Check if the request is for a static asset
    const page = await getAssetFromKV(event, {
      mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/static${pathname}`, req),
      ASSET_MANIFEST: assetManifest,
    })
    const response = new Response(page.body, page)
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
    return response
  } catch (e) {
    // If it's not a static asset, pass the request to Next.js
    const response = await server(event.request)
    return new Response(response.body, {
      ...response,
      headers: new Headers(response.headers),
    })
  }
}

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event))
})

