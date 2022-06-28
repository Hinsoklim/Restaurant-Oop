import { Gender } from "../Gender";
import { Person } from "../Person";


/**
 * A staff is a personn of the hospital with a salary
 */
export abstract class Staff extends Person {
  constructor(
    name: string,
    age: number,
    gender: Gender,
    address: string
  ) {
    super(name, age, gender,address);
  }
}
