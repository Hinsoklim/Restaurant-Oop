import { Gender } from "../Gender";
import { Person } from "../Person";
import { StaffCategory } from "../StaffCategory";


/**
 * A staff is a personn of the hospital with a salary
 */
export class Staff extends Person {

  constructor(
    protected category: StaffCategory,
    name: string,
    age: number,
    gender: Gender,
    salary: number = 0,
  ) {
    super(name, age, gender,salary);
  }

  getSalary() {
  }
}
