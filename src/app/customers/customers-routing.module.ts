import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  {
    path: 'customera',
    // loadChildren: () => import('./customers.module').then(m => m.CustomeraModule)
    // loadChildren: './customers.module#CustomeraModule'
    loadChildren: () => import('./customera/customera.module').then(m => m.CustomeraModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
