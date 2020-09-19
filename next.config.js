/* eslint-disable @typescript-eslint/explicit-function-return-type */
const withPlugins = require("next-compose-plugins");
require("dotenv").config({ path: "./env" });

const optimizedImages = require("next-optimized-images")({
  svgo: {
    plugins: [{ removeViewBox: false }],
  },
});

const plugins = [optimizedImages];

const env = Object.keys(process.env)
  .filter((key) => key.startsWith("NEXT_PUBLIC"))
  .reduce((enV, el) => ({ ...enV, ...{ [el]: process.env[el] } }), {});

module.exports = withPlugins(plugins, {
  env,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index",
      },
    ];
  },
});
