import { Router } from "express";
const usersRouter = Router();

usersRouter.get('/users',(req,res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  }else {
    res.send('No params');
  }
})

export default usersRouter;
