/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      hostname: "api.slingacademy.com"
    }]
  }
};

export default nextConfig;
