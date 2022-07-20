import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return ' Im working in http://localhost:3007 ;)!!!';
  }
}
