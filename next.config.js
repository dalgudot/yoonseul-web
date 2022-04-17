/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
    localeDetection: true,
  },
};

module.exports = nextConfig;
