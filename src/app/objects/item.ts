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

    constructor(
        quantity: number,
        name: string, 
        price: number,
        isImport: boolean = false,
        taxExempt: boolean = false)
    {
        this.quantity = quantity;
        this.name = name;
        this.price = price;
        this.isImport = isImport;
        this.taxExempt = taxExempt;

        if(!taxExempt){
            this.tax += this.roundToNearestNickel(price * salesTax);
        }
        if(isImport){
            this.tax += this.roundToNearestNickel(price * importDuty);
        }

        this.totalPrice = this.price + this.tax;
    }

    private roundToNearestNickel(price: number){
        return Math.ceil(price / .05) * .05;
    }
}