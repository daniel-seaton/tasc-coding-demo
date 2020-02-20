import { Component, OnInit, Input } from '@angular/core';
import { IBasket } from 'src/app/models/basket';
import { IItem, Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {
  @Input() item: Item;
  @Input() rowIndex: number;
  
  style: { [klass: string]: any; }

  ngOnInit(): void {
      console.log(this.rowIndex % 2);
      console.log(this.style)
      this.style = {"background-color": this.rowIndex % 2 == 0 ? "#CCCCCC" : "#FFFFFF"}
  }
}
