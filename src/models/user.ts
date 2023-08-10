import {
  Column,
  DataType,
  Table
} from 'sequelize-typescript';

import { Common } from './_common';
// import { Company } from './company';

@Table({ tableName: 'user' })
export class User extends Common {
  @Column(DataType.STRING(255))
  username!: string;

  @Column(DataType.STRING(255))
  password!: string;

  @Column(DataType.STRING(100))
  name!: string;

  @Column(DataType.STRING(255))
  email!: string;

  @Column(DataType.TINYINT.UNSIGNED)
  role!: number;

  @Column(DataType.DATE)
  lastLoginAt?: Date;

  // @ForeignKey(() => Company)
  // @Column(DataType.BIGINT.UNSIGNED)
  // companyId!: number | bigint;

  // @BelongsTo(() => Company)
  // company!: Company;
}
