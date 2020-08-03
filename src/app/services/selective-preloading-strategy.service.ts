import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  constructor() { }

  preload(route: Route, load: () => Observable<boolean>): Observable<boolean> {
    if (route.data && route.data['preload']) {
      console.log(2222)
      return Observable.of(true).delay(6000).flatMap((_: boolean) => {
        console.log(11111);
        return load()
      });
    } else {
      return of(null);
    }
  }
}