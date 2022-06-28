import { Gender } from "../Gender";
import { StaffCategory } from "../StaffCategory";
import { Staff} from "./staff";

export class Deliver extends Staff {
  constructor(protected category: StaffCategory.DELIVER, 
    name: string, age: number, 
    gender: Gender,address: string) {
    super(name, age, gender, address);
  }
}