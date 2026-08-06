/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const repoName = "velora_cleaning"; // reponuzun adı farklıysa burayı güncelleyin

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // GitHub Pages bir sunucu değil, next/image'in sunucu tarafı
    // optimizasyonunu çalıştıramaz; bu yüzden statik export'ta kapatılır.
    unoptimized: isGithubPages,
  },
  compress: true,
  eslint: {
    // Lint still runs via `npm run lint` / your editor; this only skips it
    // during `next build` to avoid CI/sandbox eslint-version edge cases.
    ignoreDuringBuilds: true,
  },
  // <video>/<source> gibi ham HTML etiketleri, next/image ve next/link'in
  // aksine basePath'i otomatik almaz. Bu yüzden basePath'i istemci
  // bileşenlerinde okunabilecek bir env değişkeni olarak da dışa açıyoruz
  // (bkz. src/lib/utils.ts -> withBasePath).
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
  ...(isGithubPages && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    trailingSlash: true,
  }),
};

export default nextConfig;
