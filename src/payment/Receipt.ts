import { Waiter } from "../human/staff/Waiter";
import { Order } from "../order/Order";
import { Cash } from "./Cash";
import { CreditCard } from "./CreditCard";
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

    doPayCash(cashMoney: Cash){
        if(this.order.getTotalPay() === cashMoney.getCash()) {
            let newPay = new Pay(cashMoney.getCash());
            return this.pay = newPay;
        }
        else if(this.order.getTotalPay() < cashMoney.getCash()) {
            let newPay = new Pay(cashMoney.getCash());
            this.pay = newPay;

            return cashMoney.getCash() - this.order.getTotalPay();
        }

    }

    doPayCard(card: CreditCard) {
       let moneyPay = card.withDrow(this.order.getTotalPay());
       if(moneyPay !== undefined) {
        let newPay = new Pay(moneyPay);
        return this.pay = newPay;
       }
       else {
        console.log("Pay card not found");
       }
    }
}