import { Waiter } from "../human/staff/Waiter";
import { Table } from "./Table";

export class Room{
    private table: Table[]=[];
    private waiter: Waiter[]=[];
    constructor(private tableId:number){};

    getNumberOfTables(){
        return this.table.length;
    }
    getTablses(){
        return this.table
    }

    addTable(table:Table){
        for(let table of this.table){
            if (this.table.length < 5){
                return this.table.push(table);
            }
        }
    }
}