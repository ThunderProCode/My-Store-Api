import express from 'express'
import routerApi from './Routes/index';
const app = express();
const port = 3000;

routerApi(app);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})
