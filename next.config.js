/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Для решения проблемы с workerThreads
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;
