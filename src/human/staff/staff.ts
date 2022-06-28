import { Time } from "../../calendarManager/Time";
import { TimeWork } from "../../calendarManager/TimeWork";
import { Gender } from "../Gender";
import { Person } from "../Person";


/**
 * A staff is a personn of the hospital with a salary
 */
export abstract class Staff extends Person {
  protected salary: number = 0;
  protected timeWork: TimeWork;
  constructor(
    name: string,
    age: number,
    gender: Gender,
    address: string
  ) {
    super(name, age, gender,address);
  }

  // Set time to relax
  setTimeWork(timeWork: TimeWork) {
    return this.timeWork = timeWork;
  }

  // set salary for full time
  setSalary(salary: number) {
    let timeCompare = new TimeWork(Time.FULLDAY)
    if (this.timeWork === timeCompare) {
      return this.salary = salary * 2;
    }
    else {
      return this.salary = salary;
    }
  }

  getSalary() {
    return this.salary;
  }
}
