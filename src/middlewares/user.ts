import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export function userHandle(req: Request, _res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization']?.split('Bearer ')?.[1] ?? '';

  if (authHeader) {
    try {
      const decoded = jwt.verify(authHeader, process.env.JWT_SECRET!);
      req.user = decoded as any;
    } catch (error) {
      console.error(error);
    }
  }

  req.isAuthenticated = !!req.user;
  next();
}
