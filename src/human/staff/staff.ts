import { Gender } from "../Gender";
import { Person } from "../Person";


/**
 * A staff is a personn of the hospital with a salary
 */
export abstract class Staff extends Person {
  protected salary: number;
  constructor(
    name: string,
    age: number,
    gender: Gender,
    address: string
  ) {
    super(name, age, gender,address);
  }

  getSalary() {
    return this.salary;
  }

  setSalary(salary: number) {
    return this.salary = salary;
  }
}
