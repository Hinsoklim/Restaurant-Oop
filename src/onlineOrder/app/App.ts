import { Person } from "../../human/Person";
import { OrderInOnline } from "../../order/OrderInOnline";

export class App {
    protected users: Person[] = [];
    protected orders: OrderInOnline[] = [];
    constructor(protected name: string){}

    signUp(user: Person) {
        if(user.getPhoneNumber() !== undefined) {
            return this.users.push(user);
        }
        else{
            console.log('You must provide a phone number.');
        }
    }

    doOrder(order: OrderInOnline) {
        return this.orders.push(order);
    }
}