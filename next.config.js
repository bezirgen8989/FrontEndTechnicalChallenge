/** @type {import('next').NextConfig} */
const path = require('path')

const repo = 'change-me-to-your-repo'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  basePath: "https://bezirgen8989.github.io/FrontEndTechnicalChallenge",
  assetPrefix:"https://bezirgen8989.github.io/FrontEndTechnicalChallenge/",
  reactStrictMode: true,
  publicRuntimeConfig: {
    publicUrl: '/public',
  },
  images: {
    loader: 'akamai',
    path: '', 
    domains: ['https://bezirgen8989.github.io/FrontEndTechnicalChallenge/'],
    unoptimized: true
  },
  sassOptions:{
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
