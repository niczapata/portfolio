/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The social page used to live at /github; keep old links working.
      { source: "/github", destination: "/social", permanent: true },
    ];
  },
};

module.exports = nextConfig;
