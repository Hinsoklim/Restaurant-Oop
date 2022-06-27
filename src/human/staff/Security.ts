import { Gender } from "../Gender";
import { StaffCategory } from "../StaffCategory";
import { Staff } from "./staff";

export class security extends Staff {

    constructor(category: StaffCategory, name: string, age: number, gender: Gender) {
      super(category, name, age, gender);
    }
}