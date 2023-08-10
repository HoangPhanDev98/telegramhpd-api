import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { BAD_REQUEST } from 'http-status';
import * as _ from 'lodash';

export const validator = (req: Request, res: Response, next: NextFunction) => {
  const validatorResult = validationResult(req);
  if (!validatorResult.isEmpty()) {
    const errors = _.map(
      validatorResult.array({ onlyFirstError: true }),
      (mappedError) => {
        return mappedError.msg;
      },
    );

    res.status(BAD_REQUEST).json({
      errors,
    });
  } else {
    next();
  }
};
