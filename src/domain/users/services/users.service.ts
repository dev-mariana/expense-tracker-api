import { User } from "../models/user";

export interface IUsersService {
  create(user: User): Promise<User>;
}
