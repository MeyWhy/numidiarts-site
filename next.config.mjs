/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Generate static HTML
  images: { unoptimized: true },
  basePath: '/numidiarts-site',
  assetPrefix: '/numidiarts-site/',
};

export default nextConfig;