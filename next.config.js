/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'akamai',
    path: ''
  }
}

module.exports = nextConfig
