import { Calendar } from "./calendarManager/Calendar";
import { Date } from "./calendarManager/Date";
import { TimeWork } from "./calendarManager/TimeWork";
import { Time } from "./calendarManager/Time";
import { Customer } from "./human/customer/Customer";
import { Gender } from "./human/Gender";
import { Chef } from "./human/staff/Chef";
import { Deliver } from "./human/staff/Deliver";
import { Waiter } from "./human/staff/Waiter";
import { StaffCategory } from "./human/StaffCategory";
import { Cake } from "./manu/bakery/Cake";
import { Drink } from "./manu/drink/Drink";
import { Food } from "./manu/food/Food";
import { ManuManager } from "./manu/ManuManager";
import { TypeMeal } from "./manu/TypeMeal";
import { Order } from "./order/Order";
import { Restaurant } from "./Restaurant";
import { Kitchen } from "./room/Kitchen";
import { EatingRoom } from "./room/EatingRoom";
import { Table } from "./room/Table";



// add Restaurest 
let chanSokRestaurent = new Restaurant('ChanSok','1st  Pnom Penh ');

// add coutomer
let soklim = new Customer('soklim',20,Gender.MALE,'2004st Robek Krom  Phen Pnom');
let sreyMoa = new Customer('srey Moa',18,Gender.FEMALE,'2004st TekLrok3  Phen Pnom');

// add Staff member
let ronaChef = new Chef(StaffCategory.CHEF,'Rana',26,Gender.FEMALE,'kondal');
ronaChef.setSalary(300);

let kikiWaiter = new Waiter (StaffCategory.WARITER,'kiki',21,Gender.FEMALE,'KomportTom');
kikiWaiter.setSalary(350);

let klarongDeliver = new Deliver (StaffCategory.DELIVER,'klarong',24,Gender.MALE,'Rotanakiry');
klarongDeliver.setSalary(300);

// add food 
let susiFood = new Food('susi',TypeMeal.FOOD,50);
chanSokRestaurent.manu.manuList.addFood(susiFood);

let soapSamon = new Food('soapSamon',TypeMeal.FOOD,60);
chanSokRestaurent.manu.manuList.addFood(soapSamon);
console.log(chanSokRestaurent);

// add drink
let coffee = new Drink('coffee',TypeMeal.DRINK,2);
chanSokRestaurent.manu.manuList.addDrink(coffee);

let coca = new Drink('coca',TypeMeal.DRINK,1);
chanSokRestaurent.manu.manuList.addDrink(coca);

// add cakes
let donat = new Cake('donat',TypeMeal.CAKE,1.5);
chanSokRestaurent.manu.manuList.addCake(donat);

// custromer order
let customer1Order = new Order(soklim,3,2);
customer1Order.addMeal(susiFood);
customer1Order.addMeal(coffee);

let customer2Order = new Order(sreyMoa,3,1);
customer2Order.addMeal(soapSamon);
customer2Order.addMeal(coffee);
customer2Order.addMeal(coca);

console.log(customer2Order);

// // add room 
// let firstFlor = new EatingRoom(1);
// let secondFlor = new EatingRoom(2);
// let thirthFlor = new EatingRoom(3);

// // add Tables
// let table1 = new Table(1);
// let table2 = new Table(2);
// let table3 = new Table(3);

// // add kitchen
// let kitchen = new Kitchen()
// chanSokRestaurent.rooms.setKitChen(kitchen);

// // add payment

