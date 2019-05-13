const withPlugins = require("next-compose-plugins");

const sass = require("@zeit/next-sass");

const nextSize = require("next-size");
//shows size of output assets

const bundleAnalyzer = require("@zeit/next-bundle-analyzer");
const purgecss = require("next-purgecss");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [sass, {}],

  // [
  //   purgecss,
  //   {
  //     purgeCssPaths: ["pages/**/*", "sections/**/*", "components/**/*"],
  //     purgeCss: {
  //       whitelistPatterns: () => [/img-*/, /ig*/, /body/],
  //       whitelist: ["body"]
  //     }
  //   }
  // ],

  nextSize,

  [
    bundleAnalyzer,
    {
      analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "../bundles/server.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "../bundles/client.html"
        }
      }
    }
  ],

  [
    optimizedImages,

    {
      mozjpeg: {
        quality: 85
      },

      webp: {
        preset: "photo",
        quality: 80
      }
    }
  ]
]);
