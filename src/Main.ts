import { Date } from "./calendarManager/Date";;
import { Customer } from "./human/customer/Customer";
import { Gender } from "./human/Gender";
import { Chef } from "./human/staff/Chef";
import { Waiter } from "./human/staff/Waiter";
import { StaffCategory } from "./human/StaffCategory";
import { Cake } from "./manu/bakery/Cake";
import { Drink } from "./manu/drink/Drink";
import { Food } from "./manu/food/Food";
import { TypeMeal } from "./manu/TypeMeal";
import { Order } from "./order/Order";
import { Restaurant } from "./Restaurant";
import { Kitchen } from "./room/Kitchen";
import { EatingRoom } from "./room/EatingRoom";
import { Table } from "./room/Table";
import { Day } from "./calendarManager/Day";
import { Month } from "./calendarManager/Month";
import { OrderInPlace } from "./order/OrderInPlace";
import { OrderInOnline } from "./order/OrderInOnline";
import { App } from "./onlineOrder/app/App";
import { Receipt } from "./payment/Receipt";
import { Cash } from "./payment/Cash";
import { CreditCard } from "./payment/CreditCard";
import { TypeCard } from "./payment/TypeCard";
import { Bank } from "./onlineOrder/bank/Bank";

// ------------- Main Code Testing ----------------------------------------------------------------

// Create a new Restaurant
let oopRestaurent = new Restaurant('OOP Restaurant','1st  Pnom Penh ');

// Create customer--------
let soklim = new Customer('soklim',20,Gender.MALE,'2004st Robek Krom  Phen Pnom');
let chansok = new Customer('Chansok',18,Gender.FEMALE,'2004st TekLrok3  Phen Pnom');

// Create Staff --------------
let ronaChef = new Chef(StaffCategory.CHEF,'Rana',26,Gender.FEMALE,'kondal');
let kikiWaiter = new Waiter (StaffCategory.WARITER,'kiki',21,Gender.FEMALE,'KomportTom');
// Add salary to chef staff ------------------------
ronaChef.setSalary(300);
kikiWaiter.setSalary(350);


// Create food item -----------------------
let susiFood = new Food('susi',TypeMeal.FOOD,50);
let coffee = new Drink('coffee',TypeMeal.DRINK,2);
let soapSamon = new Food('soapSamon',TypeMeal.FOOD,60);
let donat = new Cake('donat',TypeMeal.CAKE,1.5);

// Add food item to list of food items (manuList)-------------------
oopRestaurent.manu.manuList.addFood(susiFood);
oopRestaurent.manu.manuList.addFood(soapSamon);
oopRestaurent.manu.manuList.addDrink(coffee);
oopRestaurent.manu.manuList.addCake(donat);


// Create EatingRoom 
let room1 = new EatingRoom(1);
let room2 = new EatingRoom(2);
let room3 = new EatingRoom(3);

// Add Room to Restaurant--------------------------------------------
oopRestaurent.rooms.addRoom(room1);
oopRestaurent.rooms.addRoom(room2);
oopRestaurent.rooms.addRoom(room3);


// Create Table -----------------------------------------------
let table1 = new Table(1);
let table2 = new Table(2);
let table3 = new Table(3);

// Add table to room --------------------------------------------------------------
room1.addTable(table1);
room2.addTable(table2);
room3.addTable(table3);

// Add customer to table --------------------------------------------------------------
table1.setCustomer(soklim);
table2.setCustomer(chansok);

// check customer is already added --------------------------------
// console.log(table1.hasCustomer());
// get customer from table ---------------------------------------
// console.log(table1.getCustomer());

// Create kitchen -------------------------------------------------
let oopKitchen = new Kitchen();

// Add kitchen to room --------------------------------------------------------------
oopRestaurent.rooms.setKitChen(oopKitchen)

// Add Chef to kitchen --------------------------------------------------------------
oopKitchen.addChef(ronaChef);




// Order Main --------------------------------------------------------------
// Create Date Order --------------------------------------------------------------
let date = new Date(Day.MONDAY,Month.AUGUST,2022);

// Create Order in restaurant place -----------------------------------------------------------------------
let order1 = new OrderInPlace(1,1,date);
let order2 = new OrderInPlace(2,1,date);
let order3 = new OrderInPlace(3,1,date);

// Add meal to order ---------------------------------------
order1.addMeal(soapSamon);
order2.addMeal(susiFood);
order3.addMeal(soapSamon);

// Show total for payment all already order--------------------------------
// console.log(order1.getTotalPay());

// Add order to restaurant ---------------------------------------
oopRestaurent.order.addOrder(order1);
oopRestaurent.order.addOrder(order2);
oopRestaurent.order.addOrder(order3);


// Online Order main ----------------------------------------------------------------
let oopApp = new App('OOP Food');

// Add app to restaurant----------------------------------------------------------------
oopRestaurent.onlineOrder.setApp(oopApp);

// Check out the user can sign up or not -------------------------------------
// User Chansok can't sign up, because user don't have a phone number -----------------------------
oopApp.signUp(chansok);

// User Soklim can sign up, because user have s phone number -----------------------------
soklim.setPhone(969321869);
oopApp.signUp(soklim);


// Create online order --------------------------------
let onlineOrder1 = new OrderInOnline(soklim,date);
let onlineOrder2 = new OrderInOnline(chansok,date);

// Add food to online order --------------------------------
onlineOrder1.addMeal(susiFood);
onlineOrder2.addMeal(susiFood);

// Check if user not already signUp, user can't order verything--------------------------
// user can't order verything
oopApp.doOrder(onlineOrder2);

// user can order verything
oopApp.doOrder(onlineOrder1);

// Show app 
// console.log(oopApp);



// Payment main ----------------------------------------------------
// Create receipt for payment
let receipt1 = new Receipt(order1,kikiWaiter);

// Create bank -------------------------------
let abaBank = new Bank('ABA',"Phnom Penh");
// Create Cash and CreditCard
let cash = new Cash(5555);
let creditCard = new CreditCard(1111,date,TypeCard.ABA,abaBank,soklim);

// Do payment-----------------------------------
receipt1.doPayCard(creditCard);
receipt1.doPayCash(cash);

// Add receipt to restaurant ------------------------------
oopRestaurent.payMent.addReceipt(receipt1);

// Show Restaurant --------------------------------------------------------
console.log(oopRestaurent);