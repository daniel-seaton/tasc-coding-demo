import { Component } from '@angular/core';
import {Item} from './objects/item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasc-coding-demo';

  basketOne: Item[] = [];
  basketTwo: Item[] = [];
  basketThree: Item[] = [];

  constructor(){
    this.basketOne.push(
      new Item(1,"16lb Bag of Skittles", 16, undefined, true),
      new Item(1,"Walkman", 99.99),
      new Item(1,"Bag of Microwave Popcorn", .99, undefined, true)
    );

    this.basketTwo.push(
      new Item(1,"Bag of Vanilla-Hazelnut Coffee", 11.00, true, true),
      new Item(1,"Vespa", 15001.25, true),
    )

    this.basketThree.push(
      new Item(1,"Crate of Almond Snickers", 75.99, true, true),
      new Item(1,"Discman", 55.00),
      new Item(1,"Bottle of Wine", 10, true),
      new Item(1,"300# Bag of Fair-Trade Coffee", 997.99, undefined, true)
    )
  }
}
