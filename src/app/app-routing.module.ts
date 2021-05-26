import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TestRoutingComponent } from '';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'testRouting',
    loadChildren: './components/test-routing/test-routing.component',
    // component: TestRoutingComponent,
    data: {
      reuse: true
    }
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})], // 路由前带 # 号
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
