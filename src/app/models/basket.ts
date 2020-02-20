import {IItem} from "./item";

export interface IBasketList {
    baskets: IBasket[]
}

export interface IBasket {
    id: number;
    title: string;
    items: IItem[];
}