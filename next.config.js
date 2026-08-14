/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  images: { unoptimized: true }, // required — you use next/image in work/[slug]
};
