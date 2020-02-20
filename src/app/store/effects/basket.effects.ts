import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from  '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { GetBaskets, EBasketActions, GetBasketsSuccess } from '../actions/basket.actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BasketService } from 'src/app/services/basket.service';
import { IBasketList } from 'src/app/models/basket';

@Injectable()
export class BasketEffects {
    @Effect()
    getBaskets$ = this._actions$.pipe(
        ofType<GetBaskets>(EBasketActions.GetBaskets),
        switchMap(() => this._basketService$.getBaskets()),
        switchMap((basketList: IBasketList) => of(new GetBasketsSuccess(basketList.baskets)))
    )

    constructor(
        private _basketService$: BasketService,
        private _actions$: Actions,
    ){}
}