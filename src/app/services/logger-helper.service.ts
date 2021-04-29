import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerHelperService {
  constructor() {
    console.warn('Just a logger helper!');
  }
}
