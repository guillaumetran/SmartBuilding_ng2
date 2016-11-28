/**
 * Created by Guillaume TRAN on 24/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import {Sensor} from "../../../shared/models/sensor";
import {SensorsService} from "../../../shared/services/sensors.service";
import {Room} from "../../../shared/models/room";
import {RoomsService} from "../../../shared/services/rooms.service";

@Component({
  selector: 'ressources-sensors',
  templateUrl: 'sensors.component.html',
})
export class SensorsComponent implements OnInit {
  SensorList: Sensor[];
  SensorAdd: Sensor;
  removeSensorID: string;
  RoomsList: Room[];
  errorMessage: string;

  constructor(private sensorsService: SensorsService, private roomsService: RoomsService) {
    this.SensorAdd = new Sensor();
  }

  ngOnInit() {
    this.getSensors();
    this.getRooms();
  }

  getSensors() {
    this.sensorsService.getSensors()
      .subscribe(
        sensors => {
          this.SensorList = sensors;
        },
        error => this.errorMessage = <any> error
      );
  }

  getRooms() {
    this.roomsService.getRooms()
      .subscribe(
        rooms => {
          this.RoomsList = rooms;
        },
        error => this.errorMessage = <any> error
      );
  }

  addSensor() {
    this.sensorsService.addSensor(this.SensorAdd)
      .subscribe(
        sensor => {
          this.SensorList.push(sensor);
          this.resetSensorAdd();
        },
        error => {
          this.errorMessage = <any> error;
          this.resetSensorAdd();
        }
      )
  }

  resetSensorAdd() {
    this.SensorAdd = new Sensor();
  }

  removeSensor(id: string) {
    this.sensorsService.removeSensor(id)
      .subscribe(
        sensor => {
          let index = this.SensorList.indexOf(sensor);
          this.SensorList.splice(index, 1);
        },
        error => this.errorMessage = <any> error
      );
  }
}
