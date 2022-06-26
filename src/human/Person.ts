export enum Gender {
    MALE= 'male',
    FEMALE = 'female',
}
export abstract class Person {
    protected phone?: number;
  
    constructor(
      protected name: string,
      protected age: number,
      protected gender: Gender
    ) {}
  
    setPhone(phone: number) {
      this.phone = phone;
    }
  }