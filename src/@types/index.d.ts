import { UserInfo } from '../factory';

declare global {
  namespace Express {
    interface Request {
      user?: UserInfo;
      isAuthenticated: boolean;
    }
  }
}

export {};
