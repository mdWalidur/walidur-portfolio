import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Allow development access through cloud run proxy origins and localhost
  allowedDevOrigins: ["localhost", "*.run.app"],
};

export default nextConfig;
