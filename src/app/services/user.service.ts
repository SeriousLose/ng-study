import { Injectable } from '@angular/core';
import { Users } from '../mock/user-data.mock';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  getUsers() {
    return Users;
  }
}
