import { Gender } from "../Person";
import { Staff, StaffCategory } from "./staff";

export class Accountant extends Staff {

    constructor(category: StaffCategory, name: string, age: number, gender: Gender) {
      super(category, name, age, gender);
    }
}