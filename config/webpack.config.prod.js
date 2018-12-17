/* eslint-disable no-console */
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const merge = require('webpack-merge');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const path = require('path');
const baseConfig = require('./webpack.config.base');
const {
  servedPath,
  appIndexJs,
  demoIndexJs,
  demoHtml,
} = require('./paths');
const getClientEnvironment = require('./env');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const publicUrl = servedPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = merge([
  baseConfig,
  {
    mode: 'production',
    bail: true,
    devtool: shouldUseSourceMap ? 'source-map' : false,
    entry: {
      demo: [require.resolve('./polyfills'), demoIndexJs],
      app: [require.resolve('./polyfills'), appIndexJs],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: path.join(path.join(__dirname, '../build'), 'report.html'),
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: demoHtml,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new webpack.DefinePlugin({
        __DEV__: false,
      }),
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
      }),
      new SWPrecacheWebpackPlugin({
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        logger(message) {
          if (message.indexOf('Total precache size is') === 0) {
            // This message occurs for every build and is a bit too noisy.
            return;
          }
          if (message.indexOf('Skipping static resource') === 0) {
            // This message obscures real errors so we ignore it.
            // https://github.com/facebookincubator/create-react-app/issues/2612
            return;
          }
          console.log(message);
        },
        minify: true,
        navigateFallback: `${publicUrl}/index.html`,
        navigateFallbackWhitelist: [/^(?!\/__).*/],
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }),
      new webpack.DefinePlugin(env.stringified),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          cache: true,
          sourceMap: true,
          uglifyOptions: {
            output: {
              comments: false,
              beautify: false,
            },
          },
        }),
      ],
      concatenateModules: true,
    },
  },
]);
