"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
const argument_1 = __importDefault(require("./argument"));
const error_1 = __importDefault(require("./error"));
const forbidden_1 = __importDefault(require("./forbidden"));
const notFound_1 = __importDefault(require("./notFound"));
const unauthorized_1 = __importDefault(require("./unauthorized"));
exports.errors = {
    Argument: argument_1.default,
    Error: error_1.default,
    Forbidden: forbidden_1.default,
    NotFound: notFound_1.default,
    Unauthorized: unauthorized_1.default,
};
//# sourceMappingURL=index.js.map