import type { NextConfig } from "next";
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

const nextConfig: NextConfig = {
  // PrismaPlugin must be applied to the server bundle only.
  // Requires Webpack — hence the `--webpack` flags in package.json.
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },

  // Remote image hosts used by later phases (Unsplash hero,
  // flag CDN for the language switcher in Phase 9).
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "flagcdn.com" },
    ],
  },
};

export default nextConfig;
