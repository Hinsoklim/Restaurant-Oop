import { Meal } from "../Meal";
import { TypeMeal } from "../TypeMeal";

export class Drink extends Meal {
    constructor(name: string, typeMeal: TypeMeal,price: number){
        super(name,price,typeMeal);
    }
}
