import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature3',
    // loadChildren: () => import('./feature3/feature3.module').then((m) => m.Feature3Module),
    loadChildren: './feature3/feature3.module#Feature3Module'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
