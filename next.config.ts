/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true, // Necessario per l'export statico
  },
};

module.exports = nextConfig;

