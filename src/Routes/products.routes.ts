import { Router, Request, Response, NextFunction } from 'express';
const productsRouter = Router();
import  ProductsService from '../services/Products/products.service';

const service = new ProductsService();

// Get All products
productsRouter.get('/', async (_req: Request,res:Response) => {
  const products = await service.find();
  res.status(200).json(products);
});

// Get a product by id
productsRouter.get('/:id', async (req: Request,res: Response,
  next:NextFunction) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
      next(error);
  }
})

// Create new Product
productsRouter.post('/', async (req: Request,res: Response) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

// Update a Product
productsRouter.patch('/:id', async (req: Request,res: Response,
  next: NextFunction) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id,body);
    res.json(product);
  } catch (error:any) {
    next(error);
  }
});

// Delete a Product
productsRouter.delete('/:id', async (req: Request,res:Response) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
});

export default productsRouter;
