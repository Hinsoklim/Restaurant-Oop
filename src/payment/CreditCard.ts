import { TypeCard } from "./TypeCard";

export class CreditCard {
    protected balance: number = 0;
    constructor
        (
            protected creditNumber: number,
            protected nameOnCreditCard: string,
            protected expiryYear: number,
            protected typeCard: TypeCard
        ) { }

    deposit(amount: number) {
        return this.balance + amount;
    }

    withDrow(amount: number) {
        if(this.balance > amount) {
            return this.balance - amount;
        }
        else {
            console.log("Your balance is less than the amount");
        }
    }

}