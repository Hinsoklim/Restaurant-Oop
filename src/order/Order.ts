
import { Meal } from "../manu/Meal";
export abstract class Order {
    protected orderFoods: Meal[] = [];

    constructor(protected date: Date) {}

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


}
