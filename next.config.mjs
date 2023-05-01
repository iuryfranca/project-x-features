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
}

export default nextConfig
