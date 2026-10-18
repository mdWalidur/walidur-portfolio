import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow development access through local network, cloud run proxy origins, and localhost
  allowedDevOrigins: ["192.168.56.1", "localhost", "*.run.app"],
};

export default nextConfig;
