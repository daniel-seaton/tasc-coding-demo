import {IBasket} from "../../models/basket";

export interface IBasketState {
    baskets: IBasket[];
}

export const initialBasketState: IBasketState = {
    baskets: null
}