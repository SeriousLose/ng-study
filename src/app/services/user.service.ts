import { Injectable } from '@angular/core';
import { Users } from '../mock/user-data.mock';
import { BetterLoggerService } from './better-logger.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private logger: LoggerService, private betterLogger: BetterLoggerService) {}

  getUsers() {
      this.logger.log('get users');
      // noinspection TypeScriptUnresolvedFunction
      // this.logger.hello();
      return Users;
  }
}
