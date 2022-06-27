import { Room } from "../../room/Room";
import { Gender } from "../Gender";
import { StaffCategory } from "../StaffCategory";
import { Staff } from "./staff";

export class Waiter extends Staff {

  constructor(protected category = StaffCategory.WARITER, name: string, age: number, gender: Gender,address: string) {
    super(name, age, gender, address);
  }
}
