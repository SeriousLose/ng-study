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
export class MultiplexCustomizeRouteReuseStrategyService  implements RouteReuseStrategy {
  private static routeCache = new Map<string, ICachedRoute>();
  private static waitDelete: string; // 当前页未进行存储时需要删除
  private static currentDelete: string; // 当前页存储过时需要删除

  constructor() {}

  /** 进入路由触发，判断是否是同一路由 */
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    const IsReturn =
      future.routeConfig === curr.routeConfig &&
      JSON.stringify(future.params) === JSON.stringify(curr.params);
    return IsReturn;
  }

  /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断，这里判断是否有data数据判断是否复用 */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (this.getRouteData(route)) {
      return true;
    }
    return false;
  }

  /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // const url = this.getFullRouteUrl(route);
    const url = this.getRouteUrl(route);
    const data = this.getRouteData(route);

    if (
      MultiplexCustomizeRouteReuseStrategyService.waitDelete &&
      MultiplexCustomizeRouteReuseStrategyService.waitDelete === url
    ) {
      // 如果待删除是当前路由，且未存储过则不存储快照
      MultiplexCustomizeRouteReuseStrategyService.waitDelete = null;
      return null;
    } else {
      // 如果待删除是当前路由，且存储过则不存储快照
      if (
        MultiplexCustomizeRouteReuseStrategyService.currentDelete &&
        MultiplexCustomizeRouteReuseStrategyService.currentDelete === url
      ) {
        MultiplexCustomizeRouteReuseStrategyService.currentDelete = null;
        return null;
      } else {
        if (handle) {
          MultiplexCustomizeRouteReuseStrategyService.routeCache.set(url, { handle, data });
          this.addRedirectsRecursively(route);
        }
      }
    }
  }

  /** 若 path 在缓存中有的都认为允许还原路由 */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // const url = this.getFullRouteUrl(route);
    const url = this.getRouteUrl(route);
    const handle = MultiplexCustomizeRouteReuseStrategyService.routeCache.has(url)
      ? MultiplexCustomizeRouteReuseStrategyService.routeCache.get(url).handle
      : null;
    const data = this.getRouteData(route);
    const IsReturn =
      data && MultiplexCustomizeRouteReuseStrategyService.routeCache.has(url) && handle != null;
    return IsReturn;
  }

  /** 从缓存中获取快照，若无则返回nul */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    const url = this.getRouteUrl(route);
    const data = this.getRouteData(route);
    const IsReturn =
      data && MultiplexCustomizeRouteReuseStrategyService.routeCache.has(url)
        ? MultiplexCustomizeRouteReuseStrategyService.routeCache.get(url).handle
        : null;

    return IsReturn;
  }

  private addRedirectsRecursively(route: ActivatedRouteSnapshot): void {
    const config = route.routeConfig;
    if (config) {
      if (!config.loadChildren) {
        const routeFirstChild = route.firstChild;
        const routeFirstChildUrl = routeFirstChild
          ? this.getRouteUrlPaths(routeFirstChild).join('/')
          : '';
        const childConfigs = config.children;
        if (childConfigs) {
          const childConfigWithRedirect = childConfigs.find(
            (c) => c.path === '' && !!c.redirectTo
          );
          if (childConfigWithRedirect) {
            childConfigWithRedirect.redirectTo = routeFirstChildUrl;
          }
        }
      }
      route.children.forEach((childRoute) =>
        this.addRedirectsRecursively(childRoute)
      );
    }
  }
  // ActivatedRouteSnapshot
  private getRouteUrl(route: any) {
    return (
      route._routerState.url.replace(/\//g, '_') +
      '_' +
      (route.routeConfig.loadChildren ||
        route.routeConfig.component.toString().split('(')[0].split(' ')[1])
    );
  }

  private getFullRouteUrl(route: ActivatedRouteSnapshot): string {
    return this.getFullRouteUrlPaths(route)
      .filter(Boolean)
      .join('/')
      .replace('/', '_');
  }

  private getFullRouteUrlPaths(route: ActivatedRouteSnapshot): string[] {
    const paths = this.getRouteUrlPaths(route);
    return route.parent
      ? [...this.getFullRouteUrlPaths(route.parent), ...paths]
      : paths;
  }

  private getRouteUrlPaths(route: ActivatedRouteSnapshot): string[] {
    return route.url.map((urlSegment) => urlSegment.path);
  }

  private getRouteData(route: ActivatedRouteSnapshot): IRouteConfigData {
    return (
      route.routeConfig &&
      (route.routeConfig.data as IRouteConfigData) &&
      route.routeConfig.data.reuse
    );
  }

  //  用于删除路由快照
  public deleteRouteSnapshot(url: string): void {
    if (url[0] === '/') {
      url = url.substring(1);
    }
    url = url.replace('/', '_');
    if (MultiplexCustomizeRouteReuseStrategyService.routeCache.has(url)) {
      MultiplexCustomizeRouteReuseStrategyService.routeCache.delete(url);
      MultiplexCustomizeRouteReuseStrategyService.currentDelete = url;
    } else {
      MultiplexCustomizeRouteReuseStrategyService.waitDelete = url;
    }
  }
  public clear() {
    MultiplexCustomizeRouteReuseStrategyService.routeCache.clear();
  }
  public clearExcept(list) {
    if (!list || !MultiplexCustomizeRouteReuseStrategyService.routeCache) {
      return;
    }
    try {
      const waitDelete = [];
      MultiplexCustomizeRouteReuseStrategyService.routeCache.forEach((value: ICachedRoute, key) => {
        const handle: any = value.handle;
        const url = handle.route.value._routerState.snapshot.url;
        if (list.indexOf(url) < 0) {
          waitDelete.push(key);
        }
      });
      waitDelete.forEach((item) => {
        MultiplexCustomizeRouteReuseStrategyService.routeCache.delete(item);
      });
    } catch (error) {
      console.log('clearExcept error', error);
    }
  }
}
