import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonComponent, PersonComponent, ViewPersonComponent } from './person';
import { SearchComponent } from './search';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    component: SearchComponent,
    data: {
      reuse: true,
    },
  },
  {
    path: 'person/:id',
    component: PersonComponent,
    data: {
      reuse: true,
    },
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: ViewPersonComponent,
        data: {
          reuse: true,
        },
      },
      {
        path: 'edit',
        component: EditPersonComponent,
        data: {
          reuse: true,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
