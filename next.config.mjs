/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "https://previews.dropbox.com/",
      },
    ],
  },
}

export default nextConfig;
