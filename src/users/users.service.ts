import { Injectable } from '@nestjs/common';

export type User = any;
@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'rubenrangel',
      password: 123
    },
    {
      userId: 2,
      username: 'rura',
      password: 123
    },
  ];

  async findOne(username: string): Promise<User> {
    return this.users.find(user => user.username === username)
  }
}
