/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  eslint: {
    // Lint still runs via `npm run lint` / your editor; this only skips it
    // during `next build` to avoid CI/sandbox eslint-version edge cases.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
