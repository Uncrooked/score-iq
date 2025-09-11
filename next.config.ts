import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // facultatif, mais recommandé
  headers: async () => {
    return [
      {
        // cible tous les fichiers CSS
        source: '/(.*).css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
        ],
      },
    ];
  },
};

export default nextConfig;