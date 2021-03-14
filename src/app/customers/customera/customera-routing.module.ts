import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomeraComponent } from './customera.component';

const routes: Routes = [{ path: '', component: CustomeraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomeraRoutingModule { }
