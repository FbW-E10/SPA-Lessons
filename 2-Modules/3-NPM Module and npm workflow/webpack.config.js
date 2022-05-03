// Generated using webpack-cli https://github.com/webpack/webpack-cli
// Carefully edited by Joel :)

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const stylesHandler = 'style-loader'; // added manually - template broken?
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    watchFiles:['src/**/*'] // to detect changes on *all* files inside src directory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",  // added manually -  index.html in the root? eww
    }),
    new CopyWebpackPlugin({
      patterns: [{from:'src/images',to:'images'}]
    }), 
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset/resource",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
