import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    
    // if( user && user.password === password ) {
    if( user && await bcrypt.compare( password, user.password )  ) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { 
      sub: user._doc._id,
      username: user._doc.username, 
      createdAt: user._doc.createdAt,
    };
    // console.log(user);
    
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
