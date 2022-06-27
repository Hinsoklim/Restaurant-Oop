import { Customer } from "./human/customer/Customer";
import { Gender } from "./human/Gender";
import { Chef } from "./human/staff/Chef";
import { Deliver } from "./human/staff/Deliver";
import { Waiter } from "./human/staff/Waiter";
import { StaffCategory } from "./human/StaffCategory";
import { Cake } from "./manu/bakery/Cake";
import { Drink } from "./manu/drink/Drink";
import { Food } from "./manu/food/Food";
import { TypeMeal } from "./manu/TypeMeal";
import { Order } from "./order/Order";
import { Restaurant } from "./Restaurant";
// import {Accountant} from "./human/staff/Accountant";



// add Restaurest 
let chanSokRestaurent = new Restaurant('ChanSok','1st  Pnom Penh ');

// add coutomer
let soklim = new Customer('soklim',20,Gender.MALE,'2004st Robek Krom  Phen Pnom');

// add Staff member
let KoevAccounter = new Chef (StaffCategory.CHEF,'Koev',22,Gender.FEMALE,'Poelsat');
KoevAccounter.setSalary(700);

let kikiWaiter = new Waiter (StaffCategory.WARITER,'kiki',21,Gender.FEMALE,'KomportTom');
kikiWaiter.setSalary(350);

let klarongDeliver = new Deliver (StaffCategory.DELIVER,'klarong',24,Gender.MALE,'Rotanakiry');
klarongDeliver.setSalary(300);

// add food 
let susiFood = new Food('susi',TypeMeal.FOOD,50);
chanSokRestaurent.manu.manuList.addFood(susiFood);

// add drink
let coffee = new Drink('coffee',TypeMeal.DRINK,0.5);
chanSokRestaurent.manu.manuList.addDrink(coffee);

// add cakes
let donat = new Cake('donat',TypeMeal.CAKE,1.5);
chanSokRestaurent.manu.manuList.addCake(donat);

// custromer order
let customerOrder = new Order(soklim,3,2);
customerOrder.addMeal(susiFood);
customerOrder.addMeal(coffee);



