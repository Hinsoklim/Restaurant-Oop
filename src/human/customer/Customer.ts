import { CreditCard } from "../../payment/CreditCard";
import { Gender } from "../Gender";
import { Person } from "../Person";

export class Customer extends Person { 
    protected creditCard?: CreditCard[] = [];
    constructor(name: string,age: number,
        gender: Gender,address: string){
        super(name, age, gender, address);
    }

    addCreditCard(creditCard: CreditCard) {
        if(this.creditCard !== undefined) {
            return this.creditCard.push(creditCard);
        }
    }
}