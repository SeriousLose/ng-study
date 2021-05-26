import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature3RoutingModule } from './feature3-routing.module';
import { Feature3Component } from './feature3.component';


@NgModule({
  declarations: [Feature3Component],
  imports: [
    CommonModule,
    Feature3RoutingModule
  ]
})
export class Feature3Module { }
