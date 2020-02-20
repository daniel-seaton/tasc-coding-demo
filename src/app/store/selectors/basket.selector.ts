import { IAppState } from "../state/app.state";
import { createSelector } from '@ngrx/store';
import { IBasketState } from '../state/basket.state';

const selectBaskets = (state: IAppState) => state.baskets;

export const selectBasketList = createSelector(
    selectBaskets,
    (state: IBasketState) => state.baskets
)