
import { Gender } from "../Gender";
import { StaffCategory } from "../StaffCategory";
import { Staff} from "./staff";

export class Cleaner extends Staff {
  constructor(staffCategory: StaffCategory, 
    name: string, age: number, 
    gender: Gender,address: string) {
    super(name, age, gender, address,staffCategory);
  }
}