/** @format */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./bundle.config.js');

module.exports = env => {
  const baseConfig = env.production ? config.prod : config.dev;

  return {
    ...baseConfig,
    output: {
      path: path.resolve(__dirname, '../public'),
      publicPath: '/',
      filename: env.production ? '[name].bundle-[contentHash].js' : '[name].bundle-[hash].js',
      chunkFilename: env.production ? '[name].bundle-[contentHash].js' : '[name].bundle-[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/env']
            }
          }
        },
        {
          test: /\.(scss|css)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname)
                }
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    },
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/
          }
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/client/index.html'
      }),
      ...baseConfig.plugins
    ]
  };
};
