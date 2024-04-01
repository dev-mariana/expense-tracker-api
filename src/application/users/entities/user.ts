import { User } from "@prisma/client";

export class UserEntity {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  created_at: Date;
  updated_at?: Date | null;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.password = user.password;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}
