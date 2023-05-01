/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    publicUrl: '/public',
  },
  sassOptions:{
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
