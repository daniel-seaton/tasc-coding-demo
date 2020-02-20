import { Component, OnInit, Input } from '@angular/core';
import { IBasket } from 'src/app/models/basket';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() baskets: IBasket[];

  ngOnInit(): void {}
}
