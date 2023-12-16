/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')()

module.exports = withNextIntl({
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'placehold.co'],
  },
})
