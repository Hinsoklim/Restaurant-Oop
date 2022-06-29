import { CalendarManager } from "./calendarManager/CalendarManager";
import { HumanManager } from "./human/HumanManager";
import { RoomManager } from "./room/RoomManager";
import { PayManager } from "./payment/PayManager";
import { ManuManager } from "./manu/ManuManager";
import { OrderManager } from "./order/OrderManager";
import { OnlineOrderManager } from "./onlineOrder/OnlineOrderManager";


export class Restaurant {
    
    // All Properties are available in this class
    public calendar: CalendarManager = new CalendarManager();
    public hr: HumanManager = new HumanManager();
    public rooms: RoomManager = new RoomManager();
    public payMent: PayManager = new PayManager();
    public manu: ManuManager = new ManuManager();
    public order: OrderManager = new OrderManager();
    public onlineOrder: OnlineOrderManager = new OnlineOrderManager();

    constructor (protected name: string, protected location: string) {}
}