/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tsel.mm.bing.net",
        pathname: "/th/**",
      },
    ],
  },
}

module.exports = nextConfig

