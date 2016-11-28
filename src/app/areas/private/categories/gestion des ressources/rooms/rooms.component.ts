import { Component, OnInit } from '@angular/core';
import {Room} from "../../../shared/models/room";
import {RoomsService} from "../../../shared/services/rooms.service";

@Component({
    selector: 'ressources-rooms',
    templateUrl: 'rooms.component.html',
})
export class RoomsComponent implements OnInit {
    RoomList: Room[];
    RoomAdd: Room;
    RoomEdit: Room;
    editRoomIndex: number;
    removeRoomID: number;
    errorMessage: string;

  constructor(private roomsService: RoomsService) {
  }

  ngOnInit() {
      this.RoomAdd = new Room();
      this.RoomEdit = new Room();
      this.getRooms();
  }

  addRoom() {
      if (this.RoomAdd.RoomName != null){
          this.roomsService.addRoom(this.RoomAdd)
              .subscribe(
                  room => {
                    this.RoomList.push(room);
                    this.resetRoomAdd();
                  },
                  error => {
                      this.errorMessage = <any> error;
                      this.resetRoomAdd();
                  }
              )
      }
  }

  updateRoom(){
    this.roomsService.updateRoom(this.RoomEdit.RoomName, this.RoomEdit)
      .subscribe(
        room => {
          console.log(this.editRoomIndex);
          console.log(this.RoomList[this.editRoomIndex]);
          console.log(this.RoomEdit);
          this.RoomList[this.editRoomIndex] = this.RoomEdit;
        },
        error => {
          this.errorMessage = <any> error;
        }
      )
  }

  getRooms() {
    this.roomsService.getRooms()
      .subscribe(
        rooms => {
          this.RoomList = rooms;
        },
        error => this.errorMessage = <any> error
      );
  }

  removeRoom(id: string){
      this.roomsService.removeRoom(id)
          .subscribe(
              rooms => {
                  let index = this.RoomList.indexOf(rooms);
                  this.RoomList.splice(index, 1);
              },
              error => this.errorMessage = <any> error
          );
  }

  resetRoomAdd(){
      this.RoomAdd = new Room();
  }

  selectRoomEdit(index: number, room: Room) {
    this.editRoomIndex = index;
    this.RoomEdit = new Room();
    this.RoomEdit.RoomName = room.RoomName;
    this.RoomEdit.Floor = room.Floor;
    this.RoomEdit.Effective = room.Effective;
    this.RoomEdit.AccreditationNum = room.AccreditationNum;
    this.RoomEdit.LocalisationX = room.LocalisationX;
    this.RoomEdit.LocalisationY = room.LocalisationY;
    this.RoomEdit.LocalisationZ = room.LocalisationZ;
  }

  getPagination(): number {
    if (this.RoomList.length < 10){
      return this.RoomList.length
    }
    else return 10
  }
}
