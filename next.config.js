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
}
module.exports = nextConfig
