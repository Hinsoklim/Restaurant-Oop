import { TypeCard } from "./TypeCard";
import { Date } from "../calendarManager/Date";
import { Bank } from "../onlineOrder/bank/Bank";
import { Person } from "../human/Person";
export class CreditCard {
    constructor
        (
            protected creditNumber: number,
            protected expiryYear: Date,
            protected typeCard: TypeCard,
            protected bank: Bank,
            protected person: Person,
    ) { }

    getBank() { return this.bank; }
}