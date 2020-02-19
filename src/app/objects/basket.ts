import {Item} from "./item";

export class Basket {
    title: string;
    items: Item[];

    constructor(basket: Basket){
        this.title = basket.title;
        this.items = basket.items.map((item) => new Item(item));
    }
}