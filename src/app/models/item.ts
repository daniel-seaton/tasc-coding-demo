var salesTax = .1; //10%
var importDuty = .05; //5%

export interface IItem { 
    quantity: number;
    name: string;
    price: number;
    isImport: boolean;
    taxExempt: boolean;
}

export class Item implements IItem{
    quantity: number = 1;
    name: string;
    price: number;
    isImport: boolean;
    taxExempt: boolean;

    tax: number = 0.0;
    totalPrice: number;

    constructor(item: IItem)
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
            this.tax += this.roundToNearestNickel(this.price * importDuty);
        }

        this.totalPrice = this.price + this.tax;
    }

    private roundToNearestNickel(price: number){
        return Math.ceil(price / .05) * .05;
    }
}