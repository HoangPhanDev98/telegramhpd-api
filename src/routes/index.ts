import { Router } from 'express';

import { apiErrorHandle } from '../middlewares/error';
import { userHandle } from '../middlewares/user';
import { authRouter } from './auth';
import { userRouter } from './user';

export default function (db: DbSequelize) {
  const router = Router();

  router.use(userHandle);

  router.use('/auth', authRouter(db));
  router.use('/user', userRouter(db));

  router.use(apiErrorHandle);
  return router;
}
