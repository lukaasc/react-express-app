/** @format */

import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import config from './config/config';

class Bootstrap {
  constructor() {
    this.app = express();
  }

  setupWebpackHotModuleReload() {
    if (process.env.NODE_ENV !== 'production ') {
      /**
       * Imports for React HMR
       */
      const webpack = require('webpack');
      const webpackConfig = require('../../_config/webpack.config');
      const compiler = webpack(
        webpackConfig({
          development: true
        })
      );

      /**
       * Middlewares for HMR to work
       */
      this.app
        .use(
          require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            writeToDisk: filePath => /index\.html$/.test(filePath)
          })
        )
        .use(require('webpack-hot-middleware')(compiler));
    }

    return this;
  }

  setupCompression() {
    this.app.use(compression());

    return this;
  }

  setupBodyParsers() {
    /* prettier-ignore */
    this.app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json());

    return this;
  }

  setupPublicFolder() {
    const {
      cache: { maxAge }
    } = config;

    this.app.use(express.static('public', { maxage: maxAge }));

    return this;
  }

  build() {
    this.setupWebpackHotModuleReload()
      .setupCompression()
      .setupBodyParsers()
      .setupPublicFolder();

    return this.app;
  }
}

export default new Bootstrap();
