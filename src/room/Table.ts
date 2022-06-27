import { Customer } from "../human/customer/Customer";
import { Chair } from "./Chair";

export class Table{
    private customer : Customer;
    private chair: Chair[]=[];

    constructor(private chairId :number){}

    setCustomer(customer :Customer){
        let message = "";
        if(this.customer.length > 10){
            message = "this table can't add chair"
        }
        return message;


    }

    getNumberOfChair(){
        return this.chair.length;
    }
}