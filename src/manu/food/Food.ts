import { Meal } from "../Meal";
import { TypeMeal } from "../TypeMeal";

export class Food extends Meal {
    constructor (name: string,protected typeMeal: TypeMeal.FOOD,price: number) {
        super(name,price);
    }
    
    getPrice(): number {
        return this.price;
    }
}
