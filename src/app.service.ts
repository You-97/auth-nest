import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Youssef All is Fine, You\'re genius !!';
  }
}
