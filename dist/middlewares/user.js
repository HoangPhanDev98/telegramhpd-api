"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userHandle = void 0;
const jwt = __importStar(require("jsonwebtoken"));
function userHandle(req, _res, next) {
    var _a, _b, _c;
    const authHeader = (_c = (_b = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split('Bearer ')) === null || _b === void 0 ? void 0 : _b[1]) !== null && _c !== void 0 ? _c : '';
    if (authHeader) {
        try {
            const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
            req.user = decoded;
        }
        catch (error) {
            console.error(error);
        }
    }
    req.isAuthenticated = !!req.user;
    next();
}
exports.userHandle = userHandle;
//# sourceMappingURL=user.js.map