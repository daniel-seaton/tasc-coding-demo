import { Optional } from '@angular/core';

var salesTax = .1; //10%
var importDuty = .05; //5%

export class Item { 
    public quantity: number = 1;
    public name: string;
    public price: number;
    public isImport: boolean;
    public taxExempt: boolean;

    public tax: number = 0.0;
    public totalPrice: number;

    constructor(item: Item)
    {
        this.quantity = item.quantity;
        this.name = item.name;
        this.price = item.price;
        this.isImport = item.isImport ?? false;
        this.taxExempt = item.taxExempt ?? false;

        if(!this.taxExempt){
            this.tax += this.roundToNearestNickel(this.price * salesTax);
        }
        if(this.isImport){
            console.log(this.name);
            this.tax += this.roundToNearestNickel(this.price * importDuty);
        }

        this.totalPrice = this.price + this.tax;
    }

    private roundToNearestNickel(price: number){
        return Math.ceil(price / .05) * .05;
    }
}