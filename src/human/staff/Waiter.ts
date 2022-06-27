import { Room } from "../../room/Room";
import { Gender } from "../Gender";
import { StaffCategory } from "../StaffCategory";
import { Staff } from "./staff";

export class Waiter extends Staff {
  private room: Room;

  constructor(category: StaffCategory, name: string, age: number, gender: Gender) {
    super(category, name, age, gender);
  }
  getWaiter(){
    return this.room;

  }
}