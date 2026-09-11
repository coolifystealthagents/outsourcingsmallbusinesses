/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1,
  },
  turbopack: {
    root: process.cwd(),
  },
};
export default nextConfig;
