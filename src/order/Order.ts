import { Customer } from "../human/customer/Customer";
import { Meal } from "../manu/Meal";
export class Order {
    protected orderFood: Meal[] = [];
    constructor(protected customer: Customer,protected roomId:number, protected tableId:number) {}


    addMeal(newMeal: Meal) {
        return this.orderFood.push(newMeal);
    }
}
