import { UsersRepository } from "../../../infra/database/prisma/repositories/users.repository";
import { CreateUserDTO } from "../dto/create-user.dto";
import { UserEntity } from "../entities/user";

export class CreateUserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(user: CreateUserDTO): Promise<UserEntity> {
    return await this.usersRepository.create(user);
  }
}
