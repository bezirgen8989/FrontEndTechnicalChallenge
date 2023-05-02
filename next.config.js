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
    unoptimized: true
  },
  sassOptions:{
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
