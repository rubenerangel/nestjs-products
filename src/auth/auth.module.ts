import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { jwtConstant } from './constant';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
      UsersModule, 
      PassportModule, 
      JwtModule.register(
      { secret: jwtConstant.secret, signOptions: { expiresIn: jwtConstant.expires } }
      ),
  ],
  exports: [AuthService]
})

export class AuthModule {}
