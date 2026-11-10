import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/for-manufacturers", destination: "/for-businesses", permanent: true },
    ];
  },
};

export default nextConfig;
