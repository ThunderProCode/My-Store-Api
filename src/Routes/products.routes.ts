import { Router } from 'express';
import faker from 'faker';
import routerApi from '.';
const productsRouter = Router();

productsRouter.get('/', (req,res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products);
})

productsRouter.get('/filter', (req,res) => {
  res.send('Yo soy un filter');
})

productsRouter.get('/:id', (req,res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
})



export default productsRouter;
