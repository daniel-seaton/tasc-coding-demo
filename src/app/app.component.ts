import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { GetBaskets } from './store/actions/basket.actions';
import { selectBasketList } from './store/selectors/basket.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tasc-coding-demo';
  baskets$ = this._store.pipe(select(selectBasketList));
  
  constructor(private _store: Store<IAppState>){
  }

  ngOnInit(){
    this._store.dispatch(new GetBaskets());
  }
}
