/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.chec.io', 'i.ibb.co'],
  }
}

module.exports = nextConfig
