import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import BWError from '../factory/error/error';

export function apiErrorHandle(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof BWError) {
    res.status(err.httpStatus).json({ errors: [err.message] });
  } else {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: ['Error.'] });
  }
}
