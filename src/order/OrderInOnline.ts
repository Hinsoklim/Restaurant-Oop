import { Customer } from "../human/customer/Customer"
import { Order } from "./Order";
import { Date } from "../calendarManager/Date";

export class OrderInOnline extends Order {
    constructor(protected customer: Customer, date: Date) {
        super(date);
    }

    getCustomer() {
        return this.customer;
    }
}