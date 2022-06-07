import { Router } from "express";
const categoriesRouter = Router();

categoriesRouter.get('/categories/:categoryId/products/:productId', (req,res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
})

export default categoriesRouter;
