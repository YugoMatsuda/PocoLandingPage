/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ["tools.applemediaservices.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
}

module.exports = nextConfig

