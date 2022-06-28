import { EatingRoom } from "./EatingRoom";
import { Kitchen } from "./Kitchen";

export class RoomManager {
    protected rooms: EatingRoom[] = [];
    protected kitchen: Kitchen;

    // add room to room list
    addRoom(room: EatingRoom){
        return this.rooms.push(room);
    }

    // set kitchen
    setKitChen(kitChen: Kitchen) {
        return this.kitchen = kitChen;
    }

    getKitChen(){
        return this.kitchen;
    }

    getRooms() {
        return this.rooms;
    }
}
