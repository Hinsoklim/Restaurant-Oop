import { Gender } from "../Gender";
import { StaffCategory } from "../StaffCategory";
import { Staff} from "./staff";

export class Chef extends Staff {
  constructor(staffCategory: StaffCategory, 
    name: string, age: number, 
    gender: Gender,address: string) {
    super(name, age, gender, address,staffCategory);
  }
}