/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "j4pwshjqhtrpegxp.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
