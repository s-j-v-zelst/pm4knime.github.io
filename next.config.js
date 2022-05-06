/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  basePath: "/pm4knime-webpage",
  assetPrefix: "/pm4knime-webpage/",
};

module.exports = nextConfig;
