import { Date } from "./Date";
import { Time } from "./Time";

export class Calendar {
    constructor (protected dateOpen: Date.MONDAY,protected dateClose: Date.SUNDAY, protected timeOpen: Time.TIMEOPEN,protected timeClose: Time.TIMECLOSE) {}
}