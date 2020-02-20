import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { basketReducers } from './basket.reducers';
import { IAppState } from '../state/app.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    baskets: basketReducers
}