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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (qi, dataTypes) => __awaiter(void 0, void 0, void 0, function* () {
        qi.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.BIGINT.UNSIGNED,
            },
            username: {
                allowNull: false,
                type: dataTypes.STRING(255),
            },
            name: {
                allowNull: false,
                type: dataTypes.STRING(10),
            },
            email: {
                allowNull: false,
                type: dataTypes.STRING(255),
            },
            role: {
                allowNull: false,
                type: dataTypes.TINYINT.UNSIGNED
            },
            lastLoginAt: {
                type: dataTypes.DATE,
            },
            createdAt: {
                allowNull: false,
                type: dataTypes.DATE,
                defaultValue: (0, sequelize_1.literal)('CURRENT_TIMESTAMP'),
            },
            createdBy: {
                allowNull: false,
                type: dataTypes.BIGINT.UNSIGNED,
            },
            createdUserName: {
                allowNull: false,
                type: dataTypes.STRING(10),
            },
            updatedAt: {
                allowNull: false,
                type: dataTypes.DATE,
                defaultValue: (0, sequelize_1.literal)('CURRENT_TIMESTAMP'),
            },
            updatedBy: {
                allowNull: false,
                type: dataTypes.BIGINT.UNSIGNED,
            },
            updatedUserName: {
                allowNull: false,
                type: dataTypes.STRING(10),
            },
            deletedAt: {
                type: dataTypes.DATE,
            },
        });
    }),
    down: (qi) => __awaiter(void 0, void 0, void 0, function* () {
        qi.dropTable('user');
    })
};
//# sourceMappingURL=202308091007-create-user.js.map