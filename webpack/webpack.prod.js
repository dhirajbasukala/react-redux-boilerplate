/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const webpackGlobConfig = require('./webpack.globs.js');


const prodConfig = merge(common, {
  mode: 'production',
  entry: ['whatwg-fetch', `${webpackGlobConfig.APP_DIR}/js/index.jsx`],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // minimize: true
            }
          },
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin([`${webpackGlobConfig.BUILD_DIR}/**/*`], {
      root: path.resolve(`${__dirname}/../..`)
    }),
    new HtmlWebpackPlugin({
      title: 'ENZA - Image Sorter',
      template: `${webpackGlobConfig.APP_DIR}/index.prod.html`,
      hash: true,
      minify: {
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: `${webpackGlobConfig.APP_DIR}/assets`,
        to: `${webpackGlobConfig.BUILD_DIR}/assets`
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  // stats: "errors-only"
});

module.exports = prodConfig;
