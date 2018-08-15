/** @format */

import Express from 'express';
import Compression from 'compression';
import bodyParser from 'body-parser';

import Config from './config/config';

const app = Express();

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
  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true
    })
  );
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(Compression());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(Express.static('public'));

app.listen(Config.port, () => {
  console.log(`Running app on ${Config.port}`); //eslint-disable-line
});
