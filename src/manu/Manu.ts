import { Food } from "./food/Food";
import { Drink } from "./drink/Drink";
import { Cake } from "./bakery/Cake";

export class Manu {
    protected cake: Cake[] = [];
    protected food: Food[] = [];
    protected drink: Drink[] = [];


    // add sweet to manu
    addCake(newCake: Cake) {
        return this.cake.push(newCake);
    }
    // get all cakes
    getCake() {
        return this.cake;
    }

    // add drink to manu
    addDrink(newDrink: Drink) {
        return this.drink.push(newDrink);
    }
    // get all drinks
    getDrink(){
        return this.drink;
    }

    // add food to manu
    addFood(newFood: Food) {
        return this.food.push(newFood);
    }
    // get all foods
    getFood(){
        return this.food;
    }

}