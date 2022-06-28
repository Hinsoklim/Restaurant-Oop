import { Accountant } from "../human/staff/Accountant";
import { Customer } from "../human/customer/Customer";
export class Pay {
    constructor (protected customer: Customer, protected numberMoney: number, protected accountant: Accountant, protected date: Date,protected roomId: number,protected tableId: number) {}

    getMoney() {
        return this.numberMoney;
    }

    getCustomer() {
        return this.customer;
    }

    getAccountant() {
        return this.accountant;
    }

    getDate() {
        return this.date;
    }

    getRoomId() {
        return this.roomId;
    }

    getTableId() {
        return this.tableId;
    }

}