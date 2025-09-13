/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 't26z6f23t7dvbmsv.public.blob.vercel-storage.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
