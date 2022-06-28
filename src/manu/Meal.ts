
export abstract class Meal {
    constructor (protected name: string, protected price: number){}

    // get price from all meals
    abstract getPrice() : number;
}