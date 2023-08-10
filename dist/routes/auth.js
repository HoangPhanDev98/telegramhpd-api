"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
// import { AuthController } from '../controllers';
// import { routeGuard } from '../middlewares/routeGuard';
// import { validator } from '../middlewares/validator';
// import * as validators from '../validators/auth';
function authRouter(_db) {
    const router = (0, express_1.Router)();
    //   const controller = new AuthController(db);
    //   router.post('/login', validators.login, validator, controller.login);
    //   router.get('/me', routeGuard(), controller.profile);
    return router;
}
exports.authRouter = authRouter;
//# sourceMappingURL=auth.js.map