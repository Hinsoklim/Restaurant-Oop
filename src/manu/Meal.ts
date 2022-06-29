import { TypeMeal } from "./TypeMeal";

export abstract class Meal {
    constructor(protected name: string,
        protected price: number,
        protected typeMeal: TypeMeal) { }


    getPrice(): number {
        return this.price;
    }
}