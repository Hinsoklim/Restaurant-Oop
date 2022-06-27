import { Customer } from "../human/customer/Customer";

export class Table{
    protected customer : Customer;

    constructor(protected tableId :number){}

    setCustomer(customer :Customer){
        return this.customer = customer;
    }

    hasCustomer() {
        return this.customer !== undefined;
    }

    getCustomer() {
        return this.customer;
    }

    getTableId() {
        return this.tableId;
    }

}

