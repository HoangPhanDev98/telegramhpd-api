import { Router } from 'express';

// import { AuthController } from '../controllers';
// import { routeGuard } from '../middlewares/routeGuard';
// import { validator } from '../middlewares/validator';
// import * as validators from '../validators/auth';

export function authRouter(_db: DbSequelize) {
  const router = Router();
//   const controller = new AuthController(db);

//   router.post('/login', validators.login, validator, controller.login);
//   router.get('/me', routeGuard(), controller.profile);

  return router;
}
