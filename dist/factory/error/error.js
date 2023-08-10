"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const constants_1 = require("../../constants");
/**
 * Error
 */
class BWError extends Error {
    constructor(code, message = constants_1.messages.systemError, httpStatus = http_status_1.default.INTERNAL_SERVER_ERROR) {
        super(message);
        this.name = 'Error.';
        this.httpStatus = httpStatus;
        this.reason = code;
    }
}
exports.default = BWError;
//# sourceMappingURL=error.js.map