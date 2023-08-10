"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorHandle = void 0;
const http_status_1 = __importDefault(require("http-status"));
const error_1 = __importDefault(require("../factory/error/error"));
function apiErrorHandle(err, _req, res, _next) {
    if (err instanceof error_1.default) {
        res.status(err.httpStatus).json({ errors: [err.message] });
    }
    else {
        res.status(http_status_1.default.INTERNAL_SERVER_ERROR).json({ errors: ['Error.'] });
    }
}
exports.apiErrorHandle = apiErrorHandle;
//# sourceMappingURL=error.js.map