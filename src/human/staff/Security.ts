
import { Gender } from "../Gender";
import { StaffCategory } from "../StaffCategory";
import { Staff } from "./staff";

export class Security extends Staff {
  constructor(
    protected category: StaffCategory.SECURITY, 
    name: string, age: number, 
    gender: Gender,address: string) {
    super(name, age, gender, address);
  }
}