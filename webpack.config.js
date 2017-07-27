const webpack = require("webpack")
const path = require("path")
const SwigWebpackPlugin = require("swig-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/js/index",
  ],
  devtool: "inline-source-map",
  output: {
    publicPath: "/",
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {test: /\.jsx$/, use: [{loader: "jsx-loader"}]},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
      {test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"},
      {test: /\.css$/, use: [
        {loader: "style-loader"},
        {loader: "css-loader"},
      ]},
      {test: /\.less$/, use: [
        {loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "less-loader"},
      ]},
    ],
  },
  devServer: {
    contentBase: "./build",
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      {from: "src/favicon.ico", to: "favicon.ico"},
      {from: "CNAME", to: "CNAME", toType: "file"},
    ]),

    new webpack.HotModuleReplacementPlugin(),
    new SwigWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      watch: "./src/index.html",
      data: {
        production: false,
        lastModified: Date.now(),
      },
    }),
  ],
}
