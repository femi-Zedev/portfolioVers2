/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr','en'],  // Specify your supported languages
    defaultLocale: 'fr',    // Set the default language
  },
  images: {
    domains: ['eu-west-2.graphassets.com'],
  },
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = nextConfig;
