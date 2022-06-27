import { Chef } from "../human/staff/Chef";
import { OrderManager } from "../order/OrderManager";

export class Kitchen {
    protected chefs : Chef[] = [];
    protected order : OrderManager;

    // add a new chef to chef list
    addChef(newChef: Chef) {
        if(this.chefs.length <= 15){
            return this.chefs.push(newChef);
        }
        else {
            console.log("Ckitchen is full chefs");
        }
    }

    getAllOrder() {
        return this.order;
    }

    setOrder(newOrder: OrderManager){
        return this.order = newOrder;
    }
}