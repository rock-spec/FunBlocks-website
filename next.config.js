const createNextIntlPlugin = require("next-intl/plugin")

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    sentry: {
        hideSourceMaps: false,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ["res.cloudinary.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
            },
        ],
    },
}

// module.exports = nextConfig
module.exports = withNextIntl(nextConfig)
