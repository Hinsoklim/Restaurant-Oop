import { Calendar } from "./Calendar";
export class CalendarManager {
    protected calendar: Calendar;

    // set the calendar
    setCalendar(calendar: Calendar) {
        return this.calendar = calendar;
    }
}