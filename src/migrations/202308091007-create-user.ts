import {QueryInterface, DataTypes, literal} from 'sequelize';

export default {
    up: async (qi: QueryInterface, dataTypes: typeof DataTypes) => {
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
                defaultValue: literal('CURRENT_TIMESTAMP'),
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
                defaultValue: literal('CURRENT_TIMESTAMP'),
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
    },
    down: async (qi: QueryInterface) => {
        qi.dropTable('user');
    }
}