import { Relax } from "../../calendarManager/Relax";
import { Gender } from "../Gender";
import { StaffCategory } from "../StaffCategory";
import { Staff} from "./staff";

export class Manager extends Staff {
  protected salary: number = 0; // by default
  protected relaxTime?: Relax;
  constructor(protected category: StaffCategory.MANAGER, name: string, age: number, gender: Gender,address: string) {
    super(name, age, gender, address);
  }
  setRelaxTime(relaxTime: Relax) {
    return this.relaxTime = relaxTime;
  }

  // set salary for full time
  setSalary(salary: number) {
    if (this.relaxTime === undefined) {
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