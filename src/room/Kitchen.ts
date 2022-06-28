import { Chef } from "../human/staff/Chef";

export class Kitchen {
    protected chefs : Chef[] = [];

    // add a new chef to chef list
    addChef(newChef: Chef) {
        if(this.chefs.length <= 15){
            return this.chefs.push(newChef);
        }
        else {
            console.log("Ckitchen is full chefs");
        }
    }

}