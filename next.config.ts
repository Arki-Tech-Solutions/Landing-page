import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  async redirects() {
    return [
      { source: "/our-story", destination: "/ourstories", permanent: true },
      // /all-clients is hidden (sample content), so old client links go to the real portfolio.
      { source: "/our-clients", destination: "/portfolio", permanent: true },
      // The sample case studies are replaced by the real portfolio.
      { source: "/case-studies", destination: "/portfolio", permanent: false },
      { source: "/case-studies/:slug", destination: "/portfolio", permanent: false },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
