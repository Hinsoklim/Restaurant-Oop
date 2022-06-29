import { Waiter } from "../human/staff/Waiter";
import { Order } from "./Order";

export class OrderInPlace extends Order {
    constructor(protected roomId: number,
         protected tableId: number,date: Date) {
        super(date);
    }
}
