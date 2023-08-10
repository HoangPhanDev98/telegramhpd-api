import { Sequelize } from 'sequelize';

import * as Models from '../models';

declare global {
  type DbModels = typeof Models;

  type DbSequelize = Sequelize & {
    models: DbModels;
  };
}
