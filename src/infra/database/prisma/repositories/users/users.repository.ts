import { PrismaClient } from "@prisma/client";
import { CreateUserDTO } from "../../../../../application/users/dto/create-user.dto";
import { User } from "../../../../../domain/users/models/user";
import { IUsersRepository } from "../../../../../domain/users/repositories/users.repository";

export class UsersRepository implements IUsersRepository {
  constructor(private prisma: PrismaClient) {}

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const { name, age, email, password } = createUserDTO;
    const user = await this.prisma.user.create({
      data: {
        name,
        age,
        email,
        password,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return user;
  }
}
