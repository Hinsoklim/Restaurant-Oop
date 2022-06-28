import { Calendar } from "./calendarManager/Calendar";
import { Date } from "./calendarManager/Date";
import { Relax } from "./calendarManager/Relax";
import { Time } from "./calendarManager/Time";
import { Customer } from "./human/customer/Customer";
import { Gender } from "./human/Gender";
import { Accountant } from "./human/staff/Accountant";
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
import { Pay } from "./payment/Pay";
import { Restaurant } from "./Restaurant";
import { Kitchen } from "./room/Kitchen";
import { Room } from "./room/Room";
import { Table } from "./room/Table";



// add Restaurest 
let chanSokRestaurent = new Restaurant('ChanSok','1st  Pnom Penh ');

// add coutomer
let soklim = new Customer('soklim',20,Gender.MALE,'2004st Robek Krom  Phen Pnom');
let sreyMoa = new Customer('srey Moa',18,Gender.FEMALE,'2004st TekLrok3  Phen Pnom');

// add Staff member
let KoevAccounter = new Accountant(StaffCategory.ACCOUNTANT,'Koev',22,Gender.FEMALE,'Poelsat');
let time =Time.TIMETWO;
let relax = new Relax(time);
KoevAccounter.setSalary(700);
KoevAccounter.setRelaxTime(relax);

let ronaChef = new Chef(StaffCategory.CHEF,'Rana',26,Gender.FEMALE,'kondal');
KoevAccounter.setSalary(500);


let kikiWaiter = new Waiter (StaffCategory.WARITER,'kiki',21,Gender.FEMALE,'KomportTom');
kikiWaiter.setSalary(350);

let klarongDeliver = new Deliver (StaffCategory.DELIVER,'klarong',24,Gender.MALE,'Rotanakiry');
klarongDeliver.setSalary(300);

// add food 
let susiFood = new Food('susi',TypeMeal.FOOD,50);
chanSokRestaurent.manu.manuList.addFood(susiFood);

let soapSamon = new Food('soapSamon',TypeMeal.FOOD,60);
chanSokRestaurent.manu.manuList.addFood(soapSamon);

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

// add room 
let firstFlor = new Room(1);
let secondFlor = new Room(2);
let thirthFlor = new Room(3);

// add Tables
let table1 = new Table(1);
let table2 = new Table(2);
let table3 = new Table(3);

// add kitchen
let kitchen = new Kitchen()
chanSokRestaurent.rooms.setKitChen(kitchen);

// add payment
let sreyMoaCustomer = new Pay(sreyMoa,63,KoevAccounter,2,3)

