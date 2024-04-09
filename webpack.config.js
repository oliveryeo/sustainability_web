const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/js/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]", // Ensures any image file retains their name
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src/templates"), // Directory to serve
    },
    port: 3000, // Port number to run
    open: true, // Opens the browser upon running the script via webpack serve
    hot: true, // Enables hot reloading
    compress: true, // Enables GZIP compression for faster webpage loading
    historyApiFallback: true, // Allows URL to be manipulated by javascript
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/templates/index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      filename: "rrr.html",
      template: "./src/templates/rrr.html",
      chunks: ["index"]
    }),
    new BundleAnalyzerPlugin(),
  ],
};
