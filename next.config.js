const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cjxgfmhajeqsmwanomxu.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/landingPage/**",
      },
    ],
  },
  swcMinify: true,
  // Custom Babel configuration
  // babel: {
  //   presets: ["next/babel"],
  //   // Add any other Babel plugins or presets you need
  // },
};

module.exports = nextConfig;
