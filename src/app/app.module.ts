import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// import { CustomReuseStrategy } from 'src/custom-reuse-strategy';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ZwRouteReuseStrategy } from './extension-route-reuse-strategy';
import { EditPersonComponent, PersonComponent, ViewPersonComponent } from './person';
import { SearchComponent } from './search';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    PersonComponent,
    ViewPersonComponent,
    EditPersonComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    DataService,
    { provide: RouteReuseStrategy, useClass: ZwRouteReuseStrategy },
  ],
})
export class AppModule {}
