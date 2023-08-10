"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const error_1 = require("../middlewares/error");
const user_1 = require("../middlewares/user");
const auth_1 = require("./auth");
const user_2 = require("./user");
function default_1(db) {
    const router = (0, express_1.Router)();
    router.use(user_1.userHandle);
    router.use('/auth', (0, auth_1.authRouter)(db));
    router.use('/user', (0, user_2.userRouter)(db));
    router.use(error_1.apiErrorHandle);
    return router;
}
exports.default = default_1;
//# sourceMappingURL=index.js.map