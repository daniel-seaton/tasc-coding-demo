import { RouterReducerState } from '@ngrx/router-store';
import { IBasketState, initialBasketState } from './basket.state';

export interface IAppState {
    router?: RouterReducerState;
    baskets: IBasketState;
}

export const initialAppState: IAppState = {
    baskets: initialBasketState
}

export function getInitialState(): IAppState {
    return initialAppState;
}