import { User } from "../models/user";

export interface IUsersRepository {
  create(user: User): Promise<User>;
}
