/* eslint-disable no-undef */
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  pageExtensions: ['page.mdx', 'page.jsx', 'page.js', 'page.ts', 'page.tsx'],
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
