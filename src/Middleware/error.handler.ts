import { Request, Response, NextFunction } from 'express';

export const logErrors = (err: Error | null,req: Request,
    res: Response,next: NextFunction) => {
  console.error(err);
  next(err);
}

export const errorHandler = (err: Error,req: Request,
    res: Response,next: NextFunction ) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

export const boomErrorHandler = (err: Error | any,req: Request,
  res: Response,next: NextFunction ) => {
    if(err.isBoom){
      const { output } = err;
      res.status(output.statusCode).json(output.payload)
    }
    next(err);
}
