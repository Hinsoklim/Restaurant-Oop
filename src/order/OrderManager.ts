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

    // delete order in order list
    deleteOrder(orderDelete: Order) {
        for(let i= 0; i < this.orders.length; i++) {
            if((this.orders[i].getTableId() === orderDelete.getTableId()) && (this.orders[i].getRoomId() === orderDelete.getRoomId())) {
                return this.orders.splice(i,1);
            }
        }
    }

}