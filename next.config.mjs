/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.riv$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    })
    return config
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'fakestoreapi.com',
      'rive.app',
      'lh3.googleusercontent.com',
    ],
  },
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['latin'] },
      },
    ],
  },
  env: {
    VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
    VERCEL_WEB_ANALYTICS_ID: process.env.VERCEL_WEB_ANALYTICS_ID,
    KV_URL: process.env.KV_URL,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,
  }
}

export default nextConfig
