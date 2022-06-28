import { Meal } from "../Meal";
import { TypeMeal } from "../TypeMeal";

export class Drink extends Meal {
    constructor(name: string, protected typeMeal: TypeMeal.DRINK,price: number){
        super(name,price);
    }
}
