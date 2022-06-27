import { Meal } from "../Meal";
import { TypeMeal } from "../TypeMeal";

export class Cake extends Meal {
    constructor (name: string, protected typeMeal: TypeMeal.CAKE,price: number) {
        super(name,price);
    }
    getPrice(): number {
        return this.price;
    }
}

let sss = new Cake('dd',TypeMeal.CAKE,2222);