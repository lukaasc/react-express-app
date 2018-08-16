/**
 * Handle routes to /api
 */
import Router from 'express';
import { attachControllers } from '@decorators/express';

import Greet from './greet';

const apiRouter = Router();

attachControllers(apiRouter, [Greet]);

export default apiRouter;
