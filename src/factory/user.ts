export enum Role {
  Admin = 0,
  User = 1,
}

export interface UserInfo {
  id: number;
  username: string;
  name: string;
  email: string;
  role: number;
  lastLoginAt: string;
  companyId: number;
  createdAt: string;
  createdBy: number;
  createdUserName: string;
  updatedAt: string;
  updatedBy: number;
  updatedUserName: string;
}
