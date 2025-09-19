/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Handle static files
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
    ];
  },
  // Handle 404 for static files in development
  async rewrites() {
    return [
      {
        source: '/_next/static/:path*',
        destination: '/_next/static/:path*',
      },
    ];
  },
  // Enable experimental features
  experimental: {
    // Server Actions are now stable in Next.js 15
  }
};

module.exports = nextConfig;
