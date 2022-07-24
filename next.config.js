module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['*'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*',
        },
      ],
    },
  },
}
