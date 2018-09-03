import path from 'path';

import config from './config/config';
import app from './bootstrap';

/* routes */
import apiRoute from './routes/api';

/**
 * Setup application routes and start the server
 */
app
  .build()
  .use('/api', apiRoute)
  .get('*', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../../public/index.html`));
  })
  .listen(config.port, () => {
    console.log(`Running app on ${config.port}`); //eslint-disable-line
  });
