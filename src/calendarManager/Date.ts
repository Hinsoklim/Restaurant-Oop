import { Day } from "./Day";
import { Month } from "./Month";

export class Date {
    constructor
    (
        protected day: Day, 
        protected month: Month,
        protected year: number
    ) {}
}
