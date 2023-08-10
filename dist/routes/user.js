"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
// import { UserController } from '../controllers';
// import { Role } from '../factory';
// import { routeGuard } from '../middlewares/routeGuard';
// import { validator } from '../middlewares/validator';
// import * as validators from '../validators/user';
function userRouter(_db) {
    const router = (0, express_1.Router)();
    //   const controller = new UserController(db);
    router.get('/', 
    // routeGuard(Role.Admin, Role.User),
    // validators.search,
    // validator,
    // controller.search,
    (_req, res) => res.send('ok'));
    return router;
}
exports.userRouter = userRouter;
//# sourceMappingURL=user.js.map