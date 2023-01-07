// @ts-check
import NextBundleAnalyzer from "@next/bundle-analyzer";

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
  process.env.ANALYZE === "true"
    ? NextBundleAnalyzer({
        enabled: process.env.ANALYZE === "true",
      })
    : (_) => _;

export default withBundleAnalyzer(config);
