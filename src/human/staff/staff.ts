import { Gender, Person } from "../Person";

export enum StaffCategory {
    CHEF = 'chaf',
    CLEARNER = 'cleaner',
    DELEVERY = 'delevery',
    MANAGER = 'manager',
    SECURITY = 'security',
    WARITER = 'wariter',
}

export class Staff extends Person {
    protected salary: number = 0; // by default
  
    constructor(
      protected category: StaffCategory,
      name: string,
      age: number,
      gender: Gender
    ) {
      super(name, age, gender);
    }
  
    setSalary(salary: number) {
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  