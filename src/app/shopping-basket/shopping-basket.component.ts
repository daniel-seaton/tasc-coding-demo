import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../objects/item';
import { Basket } from '../objects/basket';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  @Input() basket: Basket;

  salesTax: number = 0;
  total: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.basket.items.forEach((item: Item) => {
      this.salesTax += item.tax;
      this.total += item.totalPrice;
    })
  }
}
