import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

interface IRouteConfigData {
  reuse: boolean;
}
interface ICachedRoute {
  handle: DetachedRouteHandle;
  data: IRouteConfigData;
}
@Injectable({
  providedIn: 'root',
})
export class MultiplexCustomizeRouteReuseStrategyService implements RouteReuseStrategy {
  // tslint:disable-next-line:variable-name
  public _cacheRouters: { [key: string]: any } = {}; // 存储路由快照

  /**
   * @description: 路由是否允许复用
   * @return: boolean true-允许 false-禁止
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log(1, 'shouldDetach', route);
    return route.data.key ? true : false;
  }

  /**
   * @description: 存储路由快照,路由离开时,触发;
   * 按path作为key存储路由快照&组件当前实例对象
   * path等同RouterModule.forRoot中的配置
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    console.log(2, 'store', route);

    this._cacheRouters[route.data.key] = { snapshot: route, handle };
  }

  /**
   * @description: 是否允许还原路由快照
   * 在缓存中有的都认为允许还原路由
   * @return:boolean true-允许 false-禁止
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log(3, 'shouldAttach', route);

    return !!route.routeConfig && !!this._cacheRouters[route.data.key];
  }

  /**
   * @description: 获取存储的路由
   * 从缓存中获取快照
   * @return:若无则返回null
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    console.log(4, 'retrieve', route);
    if (!route.routeConfig || !this._cacheRouters[route.data.key]) {
      return null;
    }
    return this._cacheRouters[route.data.key].handle;
  }

  /**
   * @description: 同一路由时,复用路由;进入路由触发
   * @return:boolean true-复用 false-不复用
   */
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    console.log(5, 'shouldReuseRoute', future);

    return future.routeConfig === curr.routeConfig;
  }
}
