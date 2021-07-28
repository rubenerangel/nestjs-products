import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [ 
    MongooseModule.forFeature(
      [
        {
          name: 'users',
          schema: UserSchema
        }
      ]
  )],
  controllers: [UsersController],
})
export class UsersModule {}
