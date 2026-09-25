/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/SachinWedsNikita",
  assetPrefix: "/SachinWedsNikita/",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
