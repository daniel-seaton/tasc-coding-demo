import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../objects/item';
@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  @Input() header: string;
  @Input() items: Item[];

  salesTax: number = 0;
  total: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.items.forEach(item => {
      this.salesTax += item.tax;
      this.total += item.totalPrice;
    })
  }
}
