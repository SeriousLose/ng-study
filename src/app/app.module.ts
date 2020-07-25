import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './views/home/home.component';
import { ShopComponent } from './views/shop/shop.component';
import { LiveComponent } from './views/live/live.component';
import { PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HomeComponent,
    ShopComponent,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
