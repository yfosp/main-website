/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "tailwindui.com", 'avatars.githubusercontent.com', 'localhost:3000'],
  },
}

module.exports = nextConfig
