/* eslint-disable import/no-extraneous-dependencies */
const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  future: {
    webpack5: true,
  },
  experimental: { optimizeCss: true },
};

module.exports = withPlugins([withBundleAnalyzer, withSourceMaps], nextConfig);
