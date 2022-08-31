/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/main",
        permanent: true,
      },
      {
        source: "/",
        destination: "/main/red",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
