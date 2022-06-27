import { Meal } from "../Meal";
import { TypeMeal } from "../TypeMeal";

export class Cake extends Meal {
    constructor (name: string, typeMeal: TypeMeal,price: number) {
        super(name, typeMeal,price);
    }
    getPrice(): number {
        return this.price;
    }
}

let sss = new Cake('dd',TypeMeal.CAKE,2222);