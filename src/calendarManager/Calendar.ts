import { Date } from "./Date";
import { Time } from "./Time";

export class Calendar {
    constructor (protected dateOpen: Date,protected dateClose: Date, protected timeOpen: Time,protected timeClose: Time) {}
}