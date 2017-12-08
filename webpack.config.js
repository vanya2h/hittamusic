const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

const extractCSS = new ExtractTextPlugin('dist/styles.min.css'); 
const jqueryPlugin = new webpack.ProvidePlugin({
  $: "jquery/dist/jquery.min.js",
  jQuery: "jquery/dist/jquery.min.js",
  "window.jQuery": "jquery/dist/jquery.min.js"
})

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./dist/bundle.min.js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    extractCSS,
    jqueryPlugin
  ],
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /global.css/,
        use: [
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              importLoaders: 1,
              minimize: true,
              modules: true,
              localIdentName: '[hash:base64:9]'
            }
          },
          'resolve-url-loader'
        ]
      },
      {
        test: /global.css$/,
        exclude: /node_modules/, 
        use: extractCSS.extract({
          use: [
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              minimize: true,
            }
          },
          'resolve-url-loader'
        ]
        })
      }
    ]
  }
}