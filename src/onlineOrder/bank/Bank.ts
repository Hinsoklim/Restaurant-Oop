
export class Bank {
    protected balance: number = 0;
    constructor(protected name: string,
        protected address: string) { }


    deposit(amount: number) {
        let addAmount = this.balance + amount;
        return this.balance = addAmount;
    }

    withDrow(amount: number) {
        if (this.balance > amount) {
            this.balance = this.balance - amount;
            return this.balance - amount;
        }
        else {
            console.log("Your balance is less than the amount!");
        }
    }
}