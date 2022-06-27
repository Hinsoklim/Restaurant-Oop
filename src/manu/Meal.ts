import { TypeMeal } from "./TypeMeal";
export abstract class Meal {
    constructor (protected name: string, protected typeMeal:TypeMeal, protected price: number){}
}