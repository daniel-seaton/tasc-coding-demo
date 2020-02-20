import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { BasketEffects } from './store/effects/basket.effects';
import { BasketService } from './services/basket.service';
import { BodyComponent } from './components/body/body.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { ItemRowComponent } from './components/item-row/item-row.component';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ShoppingBasketComponent,
    ItemRowComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([BasketEffects]),
    MatCardModule,
    MatDividerModule
  ],
  providers: [BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
