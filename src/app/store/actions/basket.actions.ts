import {Action} from '@ngrx/store';
import { IBasket } from 'src/app/models/basket';

export enum EBasketActions { 
    GetBaskets = '[Basket] Get Baskets',
    GetBasketsSuccess = '[Basket] Get Baskets Success',
    GetBasket = '[Basket] Get Basket'
}

export class GetBaskets implements Action {
    public readonly type = EBasketActions.GetBaskets
}

export class GetBasketsSuccess implements Action {
    public readonly type = EBasketActions.GetBasketsSuccess
    constructor(public payload: IBasket[]){};
}

export type BasketActions = GetBaskets | GetBasketsSuccess;