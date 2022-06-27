import { Gender } from "../Gender";
import { Person } from "../Person";

export class Customer extends Person {
    constructor(name: string,age: number,gender: Gender,address: string){
        super(name, age, gender, address);
    }
}