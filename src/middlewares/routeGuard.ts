import { NextFunction, Request, Response } from 'express';
import { some } from 'lodash';

import { errors } from '../factory/error';

export const routeGuard = (...roles: Array<string | number>) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.isAuthenticated) {
      next(new errors.Unauthorized());
    } else if (!some(roles, (role: string | number) => role == req.user?.role ?? -1)) {
      next(new errors.Forbidden());
    } else {
      next();
    }
  };
};
