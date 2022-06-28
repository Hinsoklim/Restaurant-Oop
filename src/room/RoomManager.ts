import { Room } from "./Room";
import { Kitchen } from "./Kitchen";

export class RoomManager {
    protected rooms: Room[] = [];
    protected kitchen: Kitchen;

    // add room to room list
    addRoom(room: Room){
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
