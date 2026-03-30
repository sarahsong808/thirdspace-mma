/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Cloudflare Pages deployment
  // @ts-ignore
  ...require('@cloudflare/next-on-pages/next-dev'),

  // Allow the NBC News VS Code extension dev origin to access HMR without warnings.
  allowedDevOrigins: ['localhost.nbcnews.com'],

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
}

module.exports = nextConfig
