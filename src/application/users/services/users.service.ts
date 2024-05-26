import { User } from '../../../domain/users/models/user';
import { IUsersService } from '../../../domain/users/services/users.service';
import { UsersRepository } from '../../../infra/database/prisma/repositories/users/users.repository';
import { CreateUserDTO } from '../dto/create-user.dto';

export class UsersService implements IUsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(user: CreateUserDTO): Promise<User> {
    return await this.usersRepository.create(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findByEmail(email);
  }
}
