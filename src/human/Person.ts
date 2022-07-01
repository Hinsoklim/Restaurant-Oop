import { Gender } from "./Gender";


/**
 * Any personn in the hospital - common attributes
 */
export abstract class Person {

  constructor(
    protected name: string,
    protected age: number,
    protected gender: Gender,
    protected address: string,
    protected phone?: number,

  ) {}

  setPhone(phone: number) {
    this.phone = phone;
  }

  getPhoneNumber() {
    return this.phone;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }
}
