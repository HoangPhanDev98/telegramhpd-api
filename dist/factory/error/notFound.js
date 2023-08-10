"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = require("http-status");
const _errorCode_1 = __importDefault(require("./_errorCode"));
const error_1 = __importDefault(require("./error"));
/**
 * NotFoundError
 */
class NotFoundError extends error_1.default {
    constructor(entityName, message) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = `Not Found: ${entityName}.`;
        }
        super(_errorCode_1.default.NotFound, actualMessage, http_status_1.NOT_FOUND);
        this.entityName = entityName;
    }
}
exports.default = NotFoundError;
//# sourceMappingURL=notFound.js.map