/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  compress: false,
  poweredByHeader: false,
};

const withBundleAnalyzer =
  process.env.NODE_ENV === "production"
    ? undefined
    : require("@next/bundle-analyzer")({
        enabled: process.env.ANALYZE === "true",
      });

module.exports =
  process.env.NODE_ENV === "production" ? config : withBundleAnalyzer(config);
