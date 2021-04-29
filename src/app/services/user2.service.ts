import { Injectable } from '@angular/core';
import { Users } from '../mock/user-data.mock';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class User2Service {
  isAuthorized: boolean;
  constructor(private logger: LoggerService, isAuthorized: boolean) {
    this.isAuthorized = isAuthorized;
  }

  getUsers() {
    if (this.isAuthorized) {
      this.logger.log('get users');
      return Users;
    } else {
      this.logger.log('not isAuthorized!');
      return [];
    }
  }
}
