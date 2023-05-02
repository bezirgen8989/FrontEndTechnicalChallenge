/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  images: {
    loader: 'akamai',
    path: '/FrontEndTechnicalChallenge', 
    domains: ['https://bezirgen8989.github.io/FrontEndTechnicalChallenge/'],
    unoptimized: true
  },
  sassOptions:{
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
