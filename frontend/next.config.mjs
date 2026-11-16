/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isGithubPages ? "/AgroShift_NASA-" : "",
  assetPrefix: isGithubPages ? "/AgroShift_NASA-/" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000",
  },
};

export default nextConfig;
