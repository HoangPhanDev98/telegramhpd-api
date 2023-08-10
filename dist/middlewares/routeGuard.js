"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeGuard = void 0;
const lodash_1 = require("lodash");
const error_1 = require("../factory/error");
const routeGuard = (...roles) => {
    return (req, _res, next) => {
        if (!req.isAuthenticated) {
            next(new error_1.errors.Unauthorized());
        }
        else if (!(0, lodash_1.some)(roles, (role) => { var _a, _b; return (_b = role == ((_a = req.user) === null || _a === void 0 ? void 0 : _a.role)) !== null && _b !== void 0 ? _b : -1; })) {
            next(new error_1.errors.Forbidden());
        }
        else {
            next();
        }
    };
};
exports.routeGuard = routeGuard;
//# sourceMappingURL=routeGuard.js.map