import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  isAuthorized: boolean;
  constructor() {
      this.isAuthorized = Math.random() > 0.5 ? true : false;
  }
  getIsAuthorized() {
      return this.isAuthorized;
  }
}
