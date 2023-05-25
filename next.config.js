/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
    forceSwcTransforms: false,
  },
  i18n: {
    locales: ['en', 'fr', 'pseudo'],
    defaultLocale: 'en'
  },
};

module.exports = nextConfig;
