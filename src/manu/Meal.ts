
export abstract class Meal {
    constructor (protected name: string, protected price: number){}

    
    getPrice(): number {
        return this.price;
    }
}