/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production';
const basePath = isDev ? '' : '/laslesvpn-landing';
const assetPrefix = isDev ? '' : '/laslesvpn-landing';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
