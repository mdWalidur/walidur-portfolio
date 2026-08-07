import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow development access from local network (used when accessing via IP)
  allowedDevOrigins: ["192.168.56.1", "localhost"],
};

export default nextConfig;
