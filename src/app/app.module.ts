import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { CustomReuseStrategy } from 'src/custom-reuse-strategy';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { EditPersonComponent, PersonComponent, ViewPersonComponent } from './person';
import { SearchComponent } from './search';



@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot([
    {path: '', redirectTo: 'search', pathMatch: 'full'},
    {path: 'search', component: SearchComponent},
    {
      path: 'person/:id', component: PersonComponent,
      children: [
        { path: '', redirectTo: 'view', pathMatch: 'full' },
        { path: 'view', component: ViewPersonComponent },
        { path: 'edit', component: EditPersonComponent }
        ]
    }
    ]), FormsModule],
  declarations: [ AppComponent, SearchComponent, PersonComponent, ViewPersonComponent, EditPersonComponent ],
  bootstrap: [ AppComponent ],
  providers: [ DataService, { provide: RouteReuseStrategy, useClass: CustomReuseStrategy}]
})
export class AppModule {}
