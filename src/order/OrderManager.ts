import { Order } from "./Order";
export class OrderManager {
   protected orders: Order[] = [];

    // add new order to order list
    addOrder(newOrder: Order){
        return this.orders.push(newOrder);
    }

    // get order list
    getOrderList(){
        return this.orders;
    }

}