import { Order } from "./Order";
export class OrderManager {
   protected order: Order[] = [];

    // add new order to order list
    addOrder(newOrder: Order){
        return this.order.push(newOrder);
    }

    // get order list
    getOrderList(){
        return this.order;
    }

    // delete order in order list
    deleteOrder(order: Order) {
        
    }

}