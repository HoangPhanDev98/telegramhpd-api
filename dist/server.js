"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const express_1 = __importDefault(require("express"));
const qs_1 = __importDefault(require("qs"));
const routes_1 = __importDefault(require("./routes"));
const sequelize_1 = __importDefault(require("./sequelize"));
const PORT = process.env.PORT || 3000;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dayjs_1.default.extend(utc_1.default);
        dayjs_1.default.extend(timezone_1.default);
        dayjs_1.default.tz.setDefault('UTC');
        const app = (0, express_1.default)();
        const sequelize = yield (0, sequelize_1.default)();
        app.set('query parser', (str) => qs_1.default.parse(str, {
            arrayLimit: 1000,
            parseArrays: true,
            allowDots: false,
            allowPrototypes: true,
        }));
        app.set('views', `${__dirname}/../views`);
        app.set('view engine', 'ejs');
        app.use(express_1.default.static(`${__dirname}/../public`));
        app.use(express_1.default.json({ limit: '1mb' }));
        app.use(express_1.default.urlencoded({ limit: '1mb', extended: true }));
        app.use('/api', (0, routes_1.default)(sequelize));
        app.listen(PORT, () => {
            console.log(`Run on http://localhost:${PORT}`);
        });
    });
}
main();
//# sourceMappingURL=server.js.map