import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomeraRoutingModule } from './customera-routing.module';
import { CustomeraComponent } from './customera.component';


@NgModule({
  declarations: [CustomeraComponent],
  imports: [
    CommonModule,
    CustomeraRoutingModule
  ]
})
export class CustomeraModule { }
