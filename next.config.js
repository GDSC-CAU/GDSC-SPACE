/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    pageExtensions: ['md', 'mdx', 'tsx', 'ts'],
    compiler:
        process.env.NODE_ENV === 'production'
            ? {
                  removeConsole: {
                      exclude: ['error'],
                  },
              }
            : {},
    experimental: {
        // Enable Google Analytics
        nextScriptWorkers: true,
    },
    images: {
        domains: [
            'cdn.pixabay.com',
            'www.notion.so',
            's3.us-west-2.amazonaws.com',
            'prod-files-secure.s3.us-west-2.amazonaws.com',
            'gdsc-cau.notion.site',
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
}
module.exports = nextConfig
