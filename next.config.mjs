/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: { unoptimized: true },
  basePath: '/numidiarts-site',
  assetPrefix: '/numidiarts-site/',
   env: {
    NEXT_PUBLIC_BASE_PATH: '/numidiarts-site',
  },
};

export default nextConfig;