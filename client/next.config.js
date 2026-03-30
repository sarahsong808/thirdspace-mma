/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow the NBC News VS Code extension dev origin to access HMR without warnings.
  // This only affects the local dev server — has no effect in production.
  allowedDevOrigins: ['localhost.nbcnews.com'],

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
}

module.exports = nextConfig
