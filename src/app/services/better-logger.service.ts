import { Injectable } from '@angular/core';
import { LoggerHelperService } from './logger-helper.service';

@Injectable({
  providedIn: 'root',
})
export class BetterLoggerService {
  logs: string[] = [];

  constructor(private loggerHelper: LoggerHelperService) {
    console.log('BetterLogger Constructor');
  }

  log(msg) {
    this.logs.push(msg);
    console.log('From better logger class: ' + msg);
  }
}
