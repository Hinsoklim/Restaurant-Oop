import { Customer } from "../human/customer/Customer"
import { Order } from "./Order";

export class OrderInOnline extends Order {
    constructor(protected customer: Customer, date: Date) {
        super(date);
    }
}