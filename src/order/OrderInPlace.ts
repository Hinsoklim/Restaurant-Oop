import { Order } from "./Order";
import { Date } from "../calendarManager/Date";
export class OrderInPlace extends Order {
    constructor(protected roomId: number,
         protected tableId: number, date: Date) {
        super(date);
    }
}
