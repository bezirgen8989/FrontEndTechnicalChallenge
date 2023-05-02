/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
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
