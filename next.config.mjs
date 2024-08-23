/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "api.microlink.io", // Microlink Image Preview
        ],
        remotePatterns: [
            {
                hostname: "images.unsplash.com"
            },
            {
                hostname: "assets.aceternity.com"
            }
        ]
    }
};

export default nextConfig;
