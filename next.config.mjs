/** @type {import('next').NextConfig} */
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

export default nextConfig;
