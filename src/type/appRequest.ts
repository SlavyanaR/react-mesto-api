import { Response, NextFunction, Request } from 'express';

export interface IAppRequest extends Request {
  user?: {
    _id: String,
  };
}

export const requestIdHandler = (req: IAppRequest, res: Response, next: NextFunction) => {
  req.user = {
    _id: '644830400643d876a946b819',
  };
  next();
};
