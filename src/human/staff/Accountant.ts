import { Gender } from "../Gender";
import { StaffCategory } from "../StaffCategory";
import { Staff} from "./staff";

export class Accountant extends Staff {

  constructor(protected category: StaffCategory.ACCOUNTANT, name: string, age: number, gender: Gender,address: string) {
    super(name, age, gender, address);
  }
}