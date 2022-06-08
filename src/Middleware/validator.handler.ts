import { Request, Response, NextFunction } from 'express';
import { Schema } from "joi";
import { badRequest } from '@hapi/boom';

export const validatorHandler = (schema:Schema, property: any) => {
  return (req: Request, res: Response, next:NextFunction) => {
      const data = req[property];
      const { error } = schema.validate(data);
      if(error){
        next(badRequest(error));
      }
      next();
  }
}
