import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature3Component } from './feature3.component';

const routes: Routes = [
  {
    path: '',
    component: Feature3Component,
    data: {
      key: 'Feature3Component',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Feature3RoutingModule {}
