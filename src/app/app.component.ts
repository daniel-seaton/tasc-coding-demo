import { Component } from '@angular/core';
import {Basket} from './objects/Basket';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasc-coding-demo';
  baskets: Basket[] = [];

  private basketJsonPath = "assets/baskets.json" 

  constructor(private httpClient: HttpClient){
    this.getJSON().subscribe(basketJson => {
      Object.assign(this.baskets, basketJson);
     });
   }
   public getJSON(): Observable<any> {
     return this.httpClient.get(this.basketJsonPath);
   }
}
