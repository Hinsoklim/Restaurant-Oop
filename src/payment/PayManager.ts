
import { Order } from "../order/Order";
import { Pay } from "./Pay";
export class PayManager {
    protected pays: Pay[] = [];
    protected order: Order;

    getPay() {
        return this.pays;
    }

    setPay(pay: Pay) {
        if((this.order.getRoomId() === pay.getRoomId()) && (this.order.getTableId() === pay.getTableId()) && (this.order.getTotalPay() === pay.getMoney())) {
            return this.pays.push(pay);
        }
        else if(this.order.getRoomId() !== pay.getRoomId()) {
            console.log("Invalid room id");
        }
        else if(this.order.getTableId() !== pay.getTableId()){
            console.log("Invalid table id");
        }
        else{
            let moneyChange : number = 0;
            if(pay.getMoney() > this.order.getTotalPay()){
                moneyChange = pay.getMoney() - this.order.getTotalPay();
                let newPay = new Pay(pay.getCustomer(),this.order.getTotalPay(),pay.getAccountant(),pay.getRoomId(),pay.getTableId());
                this.pays.push(newPay);

                return moneyChange;
            }
        }
    }

    setOrder(order: Order) {
        return this.order = order;
    }
}