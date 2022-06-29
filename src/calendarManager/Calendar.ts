import { Date } from "./Date";
import { Day } from "./Day";
import { Time } from "./Time";

export class Calendar {
    constructor (protected dayOpen:Day, 
        protected dayClose:Day,
        protected timeOpen: Time.TIMEOPEN,
        protected timeClose: Time.TIMECLOSE) {}
}