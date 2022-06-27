import { Customer } from "../human/customer/Customer";
import { Meal } from "../manu/Meal";
export class Order {
    protected orderFoods: Meal[] = [];
    constructor(protected customer: Customer,protected roomId:number, protected tableId:number) {}


    addMeal(newMeal: Meal) {
        return this.orderFoods.push(newMeal);
    }

    getTotalPay() {
        let totalMoney = 0;
        for(let food of this.orderFoods) {
            totalMoney += food.getPrice();
        }
        return totalMoney;
    }
}
