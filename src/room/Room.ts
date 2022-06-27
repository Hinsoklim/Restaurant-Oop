import { Customer } from "../human/customer/Customer";
import { Waiter } from "../human/staff/Waiter";
import { Table } from "./Table";

export class Room{
    protected tables: Table[]=[];
    protected waiters: Waiter[]=[];
    protected customers: Customer[] = [];

    constructor(private roomId: number){};

    // add new table to the list of tables
    addTable(table: Table) {
        return this.tables.push(table);
    }

    // add new customer to the list of customers
    addCustomer(customer: Customer) {
        return this.customers.push(customer);
    }

    // add new waiters to the list of waiters
    addWaiter(waiter: Waiter) {
        return this.waiters.push(waiter);
    }

    // get customers
    getCustomer(){
        return this.customers;
    }

    // get tables
    getTable() {
        return this.tables;
    }

    getWaiter() {
        return this.waiters;
    }

    getRoomId() {
        return this.roomId;
    }
}