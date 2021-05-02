/* eslint-disable import/no-extraneous-dependencies */
const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  future: {
    webpack5: true,
  },
  experimental: { optimizeCss: true },
};

module.exports = withPlugins([withBundleAnalyzer, withSourceMaps], nextConfig);
