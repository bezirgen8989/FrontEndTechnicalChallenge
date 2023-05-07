/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://bezirgen8989.github.io/api/:path*',
      },
    ]
  },
  reactStrictMode: true,
  exportTrailingSlash: true,
  images: {
    loader: "akamai",
    path: "/FrontEndTechnicalChallenge",
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
