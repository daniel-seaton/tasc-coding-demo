import { Component, OnInit, Input } from '@angular/core';
import { IBasket } from 'src/app/models/basket';
import { IItem, Item } from 'src/app/models/item';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  @Input() basket: IBasket;
  items: Item[] = [];

  salesTax: number = 0;
  total: number = 0;

  ngOnInit(): void {
    this.basket.items.forEach((_item: IItem) => {
      const item = new Item(_item);
      this.salesTax += item.tax;
      this.total += item.totalPrice;
      this.items.push(item);
    })
  }
}
