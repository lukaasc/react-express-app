/** @format */

import Express from 'express';
import Config from './config/config';

const app = Express();
const router = Express.Router();

if (process.env.NODE_ENV !== 'production ') {
  /**
   * Imports for React HMR
   */
  const webpack = require('webpack');
  const webpackConfig = require('../../webpack.config');
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

app.use(Express.static('public'));

router.get('/', (req, res) => res.render('index.html'));

app.use('/', router);

app.listen(Config.port, () => {
  console.log(`Running app on ${Config.port}`);
});
