/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',},
    basePath:'/pm4knime-webpage-2/',
    assetPrefix: '/pm4knime-webpage-2/'
}

module.exports = nextConfig
