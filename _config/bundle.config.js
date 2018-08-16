const webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
  dev: {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
      vendor: ['react', 'react-dom', hotMiddlewareScript],
      app: ['@babel/polyfill', './src/client/index.js', hotMiddlewareScript]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  },
  prod: {
    mode: 'production',
    entry: {
      vendor: ['react', 'react-dom'],
      app: ['@babel/polyfill', './src/client/index.js']
    },
    plugins: []
  }
};
