import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}
  logs: string[] = [];

  log(msg) {
    this.logs.push(msg);
    console.warn('From logger class: ' + msg);
  }
}
