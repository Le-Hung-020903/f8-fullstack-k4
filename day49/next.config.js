/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api-pages.vercel.app",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
