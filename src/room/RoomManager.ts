import { Room } from "./Room";

export class RoomManager {
    public rooms: Room[] = [];
    getNumberOfRooms():number { 
        return this.rooms.length;
    }

    addRoom(room: Room){
        return this.rooms.push(room);
    }
    
}