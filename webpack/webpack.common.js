const SimpleProgressPlugin = require('simple-progress-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpackGlobConfig = require('./webpack.globs.js');

const config = {
  output: {
    path: webpackGlobConfig.BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules\/(?!(auto-bind)\/).*/,
        loader: 'babel-loader',
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|jpe?g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  context: __dirname,
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new SimpleProgressPlugin(),
    new FaviconsWebpackPlugin({
      logo: `${webpackGlobConfig.APP_DIR}/assets/images/logo.svg`,
      emitStats: false,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
  ]
};

module.exports = config;
