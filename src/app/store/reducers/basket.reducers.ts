import { initialBasketState, IBasketState } from '../state/basket.state';
import { BasketActions, EBasketActions } from '../actions/basket.actions';

export const basketReducers = (
    state = initialBasketState,
    action: BasketActions
): IBasketState => {
    switch(action.type){
        case EBasketActions.GetBasketsSuccess: {
            return {
                ...state,
                baskets: action.payload
            }
        }
        default:
            return state;
    }
}