import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { GroceryItemComponent } from './grocery-item/grocery-item.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    GroceryItemComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
