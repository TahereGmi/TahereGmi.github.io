/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gh-pages-test',
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'akamai',
    path: ''
  }
}

module.exports = nextConfig
