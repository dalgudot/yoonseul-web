/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
    localeDetection: true,
  },

  async redirects() {
    return [
      {
        source: '/appstore',
        destination:
          'https://apps.apple.com/kr/app/%EC%9C%A4%EC%8A%AC/id1618657913', // 한국어 링크 - 브런치 등 한국어 링크로 보낼 때
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
