"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  target: "electron-renderer",
  entry: "./render/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "./img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "render"),
        use: [
          {
            loader: require.resolve("babel-loader"),
            query: {
              presets: ["env", "stage-0", "react"]
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "./fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./render/index.html" }),
    new VueLoaderPlugin()
  ]
};
