// next.config.js
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const path = require("path");
const withSvgr = require("next-svgr");

const isDev = process.env.NODE_ENV !== "production";

module.exports = withPlugins([
  withSvgr({
    includeFileLoader: true,
    svgrOptions: {
      configFile: path.resolve(__dirname, "svgr.config.js"),
    },
  }),
  withPWA({
    pwa: {
      dest: "public",
      disable: isDev,
    },
  }),
]);
