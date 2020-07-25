import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
