import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
    // data: { preload: true }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  // imports: [RouterModule.forChild(routes, { enableTracing: true, preloadingStrategy: SelectivePreloadingStrategyService })],
  imports: [RouterModule.forChild(routes)],
  providers: [SelectivePreloadingStrategyService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
