import Config from './config/config';
import app from './bootstrap';

/* routes */
import apiRoute from './routes/api';

/**
 * Setup application routes and start the server
 */
app
  .build()
  .use('/api', apiRoute)
  .listen(Config.port, () => {
    console.log(`Running app on ${Config.port}`); //eslint-disable-line
  });
