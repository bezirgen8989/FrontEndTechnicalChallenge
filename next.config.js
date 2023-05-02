/** @type {import('next').NextConfig} */
const path = require('path')

const repo = 'change-me-to-your-repo'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  basePath: "/FrontEndTechnicalChallenge",
  assetPrefix:"/FrontEndTechnicalChallenge/",
  reactStrictMode: true,
  publicRuntimeConfig: {
    publicUrl: '/FrontEndTechnicalChallenge',
  },
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
