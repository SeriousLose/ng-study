import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRoutingComponent } from './components/test-routing/test-routing.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'testRouting',
    component: TestRoutingComponent,
    data: {
      key: 'TestRoutingComponent',
    },
  },
  {
    path: 'feature3',
    loadChildren: () => import('./feature3/feature3.module').then((m) => m.Feature3Module),

  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})], // 路由前带 # 号
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
