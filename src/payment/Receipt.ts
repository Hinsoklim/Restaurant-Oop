import { Waiter } from "../human/staff/Waiter";
import { Order } from "../order/Order";
import { Pay } from "./Pay";

export class Receipt {
    protected pay: Pay;
    constructor( 
        protected order: Order,
        protected waiter: Waiter
    ) { }

    getTotalOrder() {
        return this.order.getTotalPay();
    }

    doPay(pay: Pay){
        if(this.order.getTotalPay() === pay.getMoney()){
            return this.pay = pay;
        }
        else if(this.order.getTotalPay() < pay.getMoney()) {
            let newPay = new Pay(this.order.getTotalPay());
            let moneyChange = pay.getMoney() - this.order.getTotalPay();
            this.pay = newPay;
            return moneyChange;
        }
        else{
            console.log("Your money is too low");
        }
    }
}