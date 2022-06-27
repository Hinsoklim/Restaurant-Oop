import { Customer } from "../human/customer/Customer";
import { Chair } from "./Chair";

export class Table{
    private customer : Customer;
    private chair: Chair[]=[];

    constructor(private chairId :number){}

    setCustomer(customer :Customer){
        return this.customer = customer
    }
    getNumberOfChair(){
        return this.chair.length;
    }
    getChairs(){
        return this.chair
    }

    addChair(table:Chair){
        return this.chair.push(table);
    }

}