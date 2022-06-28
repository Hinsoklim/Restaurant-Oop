
import { Gender } from "../Gender";
import { StaffCategory } from "../StaffCategory";
import { Staff} from "./staff";

export class Cleaner extends Staff {
  constructor(protected category: StaffCategory.CLEARNER, 
    name: string, age: number, 
    gender: Gender,address: string) {
    super(name, age, gender, address);
  }
}