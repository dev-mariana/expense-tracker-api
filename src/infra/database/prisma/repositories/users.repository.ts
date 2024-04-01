import { PrismaClient } from "@prisma/client";
import { CreateUserDTO } from "../../../../application/users/dto/create-user.dto";
import { UserEntity } from "../../../../application/users/entities/user";

export class UsersRepository {
  constructor(private prisma: PrismaClient) {}

  async create(createUserDTO: CreateUserDTO): Promise<UserEntity> {
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
