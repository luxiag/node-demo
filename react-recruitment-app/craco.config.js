const CracoLessPlugin = require("craco-less");
module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: {
        /* Any css-loader configuration options: https://github.com/webpack-contrib/css-loader. */
      },
    },
    less: {
      loaderOptions: {},
    },
    postcss: {
      mode: "file",
    },
  },
  eslint: {
    enable: true,
    mode: "file",
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
