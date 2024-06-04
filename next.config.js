const withPWA = require("next-pwa");
const isProduction = process.env.NODE_ENV === "production";

module.exports = withPWA({
  dest: "public",
  disable: !isProduction,
});
