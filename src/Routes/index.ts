import { Router } from 'express';
import productsRouter from './products.routes'
import categoriesRouter from './categories.routes';
import usersRouter from './users.routes';

const routerApi = (app:any) => {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

export default routerApi
