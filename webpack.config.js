var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebPackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var path = require("path");

var isProduction = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: '/dist'
});

cssConfig = isProduction ? cssProd : cssDev;

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'app.bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'file-loader?name=images/[hash].[ext]',
            'image-webpack-loader'
          ]
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/i,
          loader: 'file-loader?name=[name].[ext]&outputPath=fonts/&publicPath=',
        },
        {
          test: /\.scss$/,
          use: cssConfig
        },
        {
          test: /\.pug$/,
          use: ['html-loader', 'pug-html-loader'],
        }
      ]
    },

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      hot: true,
      stats: 'errors-only',
      open: true
    },

    plugins: [
      new HtmlWebPackPlugin({
        title: 'Edificio Instancia',
        hash: true,
        template: './src/index.pug'
      }),
      new ExtractTextPlugin({
        filename: 'style.css',
        disable: !isProduction,
        allChunks: true
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
}