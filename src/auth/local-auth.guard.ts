import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable() //TEndra un servicio
export class LocalAuthGuard extends AuthGuard('local') {
  
}
