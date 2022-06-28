import { Customer } from "../human/customer/Customer";
import { Meal } from "../manu/Meal";
export class Order {
    protected orderFoods: Meal[] = [];
    constructor(protected customer: Customer,protected roomId:number, protected tableId:number) {}

    // add food to the orderFoods
    addMeal(newMeal: Meal) {
        return this.orderFoods.push(newMeal);
    }

    // get the total Money
    getTotalPay() {
        let totalMoney = 0;
        for(let food of this.orderFoods) {
            totalMoney += food.getPrice();
        }
        return totalMoney;
    }

    // get customer
    getCustomer() {
        return this.customer;
    }

    getRoomId() {
        return this.roomId;
    }

    getTableId() {
        return this.tableId;
    }

}
