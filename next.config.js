/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  env: {
    NEXT_PUBLIC_API_KEY : process.env.NEXT_PUBLIC_API_KEY
  }
  
};

module.exports = nextConfig;
