"use strict";
/**
 * sequelize
 */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models = __importStar(require("./models"));
const createClient = () => __awaiter(void 0, void 0, void 0, function* () {
    const host = process.env.DB_HOST;
    const port = +process.env.DB_PORT;
    const username = process.env.DB_USER || 'root';
    const password = process.env.DB_PASS || 'root';
    const database = process.env.DB_NAME;
    const sequelize = new sequelize_typescript_1.Sequelize({
        host,
        port,
        username,
        password,
        database,
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
        benchmark: true,
        logging: (sql, time) => {
            console.log(`${sql.replace(/\s\s+/g, ' ')} (took ${time}ms)`);
        },
        models: Object.values(models),
    });
    sequelize
        .authenticate()
        .then(() => {
        console.log('MySQL server connected');
    })
        .catch((err) => {
        console.log(`MySQL connection error ${err}`);
        process.exit(1);
    });
    return sequelize;
});
exports.default = createClient;
//# sourceMappingURL=sequelize.js.map