/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // assetPrefix: "/FrontEndTechnicalChallenge/",
  // basePath: "/FrontEndTechnicalChallenge",
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
