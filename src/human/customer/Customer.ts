import { App } from "../../onlineOrder/app/App";
import { CreditCard } from "../../payment/CreditCard";
import { Gender } from "../Gender";
import { Person } from "../Person";

export class Customer extends Person { 
    protected creditCard?: CreditCard[] = [];
    protected appOrder?: App;
    constructor(name: string,age: number,
        gender: Gender,address: string){
        super(name, age, gender, address);
    }

    addCreditCard(creditCard: CreditCard) {
        if(this.creditCard !== undefined) {
            return this.creditCard.push(creditCard);
        }
    }

    doneloadApp(app: App) {
        if (this.phone !== undefined) {
            return this.appOrder = app;
        }
        else {
            console.log("Please put your phone number");
        }
    }
}