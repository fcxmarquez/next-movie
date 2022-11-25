/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
  experimental: { appDir: true },
  compiler: {
    styledComponents: true,
  }
};

module.exports = nextConfig;