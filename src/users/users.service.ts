import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { IUser } from './interfaces/user.interface';

// export type User = any;
@Injectable()
export class UsersService {
  // Tomamos a través del constructor lo que se encuentra en la DB
  constructor(@InjectModel('users') private readonly userModel: Model<IUser>) {}

  async findOne(username: string): Promise<IUser> {
    return await this.userModel.findOne({ username} );
  }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const user = new this.userModel(createUserDto);
    return await user.save();
  }

  // private readonly users = [
  //   {
  //     userId: 1,
  //     username: 'rubenrangel',
  //     password: 123
  //   },
  //   {
  //     userId: 2,
  //     username: 'rura',
  //     password: 123
  //   },
  // ];

  // async findOne(username: string): Promise<User> {
  //   return this.users.find(user => user.username === username)
  // }
}
