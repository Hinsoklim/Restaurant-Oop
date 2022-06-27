import { Customer } from "./customer/Customer";
import { Staff } from "./staff/staff";

export class HumanManager {
    protected staffs : Staff[] = [];
    protected customers: Customer[] = [];
    
    // get all staffs
    getStaffs(): Staff[] {
        return this.staffs;
    }

    // add a new staff to the list
    addStaff(newStaff: Staff) {
        return this.staffs.push(newStaff);
    }

    // add a new customer to the list
    addCustomer(newCustomer: Customer) {
        return this.customers.push(newCustomer);
    }

    // get all customers
    getCustomer() {
        return this.customers;
    }
}