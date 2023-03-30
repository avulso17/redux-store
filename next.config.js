/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'jsx'],
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
