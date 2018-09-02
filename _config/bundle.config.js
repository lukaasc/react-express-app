const webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
  dev: {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
      app: ['./src/client/index.js', hotMiddlewareScript]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  },
  prod: {
    mode: 'production',
    entry: {
      app: ['./src/client/index.js']
    },
    plugins: [new webpack.HashedModuleIdsPlugin()]
  }
};
