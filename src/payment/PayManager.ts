
import { Order } from "../order/Order";
import { Pay } from "./Pay";
export class PayManager {
    protected pays: Pay[] = [];
    protected order: Order;

    getPay() {
        return this.pays;
    }

    setPay(pay: Pay) {
        
    }
}