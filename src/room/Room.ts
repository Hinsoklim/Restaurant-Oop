import { Table } from "./Table";

export class Room{
    private table: Table[]=[];
    constructor(private tableId:number){};

    getNumberOfTables(){
        return this.table.length;
    }
    getTablses(){
        return this.table
    }

    addTable(table:Table){
        return this.table.push(table);
    }


}