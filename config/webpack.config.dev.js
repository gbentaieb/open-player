const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const baseConfig = require('./webpack.config.base');
const {
  appIndexJs,
  demoIndexJs,
  demoHtml,
} = require('./paths');
const getClientEnvironment = require('./env');

const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = merge([
  baseConfig,
  {
    mode: 'development',
    entry: {
      demo: [
        require.resolve('./polyfills'),
        require.resolve('react-dev-utils/webpackHotDevClient'),
        demoIndexJs,
      ],
      app: [
        require.resolve('./polyfills'),
        require.resolve('react-dev-utils/webpackHotDevClient'),
        appIndexJs,
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: demoHtml,
      }),
      new webpack.DefinePlugin({
        __DEV__: true,
      }),
      new webpack.DefinePlugin(env.stringified),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    ],
  },
]);
