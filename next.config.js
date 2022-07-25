module.exports = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
      remotePatterns: [
        {
          hostname: '*',
        },
      ],
    },
  },
}
