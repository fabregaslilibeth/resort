import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Villa photos come straight from the booking engine's gallery, journal
    // photos from the resort's WordPress uploads.
    remotePatterns: [
      { protocol: "https", hostname: "r.profitroom.pl", pathname: "/lalagunavillasluxurydiveresortandspa/**" },
      { protocol: "https", hostname: "lalagunavillas.com", pathname: "/wp-content/uploads/**" },
    ],
  },
};

export default nextConfig;
