"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  target: "electron-renderer",
  entry: "./render/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.vue$/, use: "vue-loader" }
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
