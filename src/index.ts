import express from 'express'
import routerApi from './Routes/index';
import { errorHandler, logErrors, boomErrorHandler } from './Middleware/error.handler';

const app = express();
const port = 3000;

app.use(express.json());
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
