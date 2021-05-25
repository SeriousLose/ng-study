import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplexCustomizeRouteReuseStrategyService } from './serves/multiplex-customize-route-reuse-strategy.service';
import { TestComponent } from './components/test/test.component';
import { TestRoutingComponent } from './components/test-routing/test-routing.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: MultiplexCustomizeRouteReuseStrategyService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
