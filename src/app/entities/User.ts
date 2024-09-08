export enum USER_ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  role: USER_ROLE;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
