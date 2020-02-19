import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingBasketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
