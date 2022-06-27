import { Room } from "./Room";
import { KitChen } from "./Kitchen";

export class RoomManager {
    protected rooms: Room[] = [];
    protected kitchen: KitChen;

    // add room to room list
    addRoom(room: Room){
        return this.rooms.push(room);
    }

    // set kitchen
    setKitChen(kitChen: KitChen) {
        return this.kitchen = kitChen;
    }

    getKitChen(){
        return this.kitchen;
    }

    getRooms() {
        return this.rooms;
    }
}
