/** @type {import('next').NextConfig} */
import createNextintlPlugin from 'next-intl/plugin'

const withNextIntl = createNextintlPlugin()

const nextConfig = {
  images: {
    remotePatterns: [
    {
      hostname: 'unsplash.com'
    },
    {
      hostname: 'images.unsplash.com'
    },
    {
      hostname: 'media.graphassets.com'
    },
  ],
  }
};

export default withNextIntl(nextConfig);
