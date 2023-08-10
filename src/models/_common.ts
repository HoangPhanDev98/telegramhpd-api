import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  UpdatedAt,
} from 'sequelize-typescript';

export class Common extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT.UNSIGNED)
  id!: number | bigint;

  @CreatedAt
  createdAt!: Date;

  @Column(DataType.BIGINT.UNSIGNED)
  createdBy!: number | bigint;

  @Column(DataType.STRING(10))
  createdUserName!: string;

  @UpdatedAt
  updatedAt!: Date;

  @Column(DataType.BIGINT.UNSIGNED)
  updatedBy!: number | bigint;

  @Column(DataType.STRING(10))
  updatedUserName!: string;

  @Column(DataType.TINYINT.UNSIGNED)
  deleted?: number;
}
