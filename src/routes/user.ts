import { Router } from 'express';

// import { UserController } from '../controllers';
// import { Role } from '../factory';
// import { routeGuard } from '../middlewares/routeGuard';
// import { validator } from '../middlewares/validator';
// import * as validators from '../validators/user';

export function userRouter(_db: DbSequelize) {
  const router = Router();
//   const controller = new UserController(db);

  router.get(
    '/',
    // routeGuard(Role.Admin, Role.User),
    // validators.search,
    // validator,
    // controller.search,
    (_req, res) => res.send('ok')
  );

  return router;
}
