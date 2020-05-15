const path = require("path");


module.exports = {
  stories: [path.resolve(__dirname, "../src/**/*.stories.jsx")],
  addons: [
    "@storybook/addon-viewport/register",
    "@storybook/addon-storysource",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/i,
      use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"],
    });

    return config;
  },
};
