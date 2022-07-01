import { Customer } from "../../human/customer/Customer";
import { Person } from "../../human/Person";
import { OrderInOnline } from "../../order/OrderInOnline";

export class App {
    protected users: Person[] = [];
    protected orders: OrderInOnline[] = [];
    constructor(protected name: string){}

    signUp(user: Person) {
        if(this.hasUser(user) === false){
            if(user.getPhoneNumber() !== undefined) {
                this.users.push(user);
            }
            else {
                console.log("You must have a phone number");
            }
        }
        else {
            console.log("You have account already");
        }
    }

    hasUser(newUser: Person) {
        for(let user of this.users) {
            if((user.getName() === newUser.getName()) 
            && user.getAddress() === newUser.getAddress()) {
                return true;
            }
        }
        return false;
    }

    doOrder(order: OrderInOnline) {
        if (this.hasUser(order.getCustomer()) === true) {
            return this.orders.push(order);
        }
        else {
            console.log('You must to sign up to order');
        }
    }
}