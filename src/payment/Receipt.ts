import { Staff } from "../human/staff/staff";
import { Order } from "../order/Order";
import { Cash } from "./Cash";
import { CreditCard } from "./CreditCard";
import { Pay } from "./Pay";


export class Receipt {
    protected pay: Pay;
    constructor( 
        protected order: Order,
        protected staff: Staff
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
       let moneyNeedPay = card.getBank().withDrow(this.order.getTotalPay());
       if(moneyNeedPay !== undefined) {
        let newPay = new Pay(moneyNeedPay);
        return this.pay = newPay;
       }
       else {
        console.log("Pay card not found");
       }
    }

    getPay() {
        return this.pay;
    }
}