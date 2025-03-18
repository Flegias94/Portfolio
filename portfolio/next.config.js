/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Use this if you have image errors on Vercel
  },
};

module.exports = nextConfig;
