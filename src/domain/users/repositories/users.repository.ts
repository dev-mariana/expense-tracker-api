import { User } from '../models/user';

export interface IUsersRepository {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
}
