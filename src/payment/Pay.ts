import { AccountTent } from "../human/staff/Accountant";
import { Customer } from "../human/customer/Customer";
export class Pay {
    constructor (protected customer: Customer, protected numberMoney: number, protected accountant: AccountTent, protected date: Date,) {}
}