/**
 * Created by Guillaume TRAN on 24/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import {Sensor} from "../../../shared/models/sensor";
import {SensorsService} from "../../../shared/services/sensors.service";

@Component({
  selector: 'private-sensors',
  templateUrl: 'sensors.component.html',
})
export class SensorsComponent implements OnInit {
  SensorList: Sensor[];
  errorMessage: string;

  constructor(private sensorService: SensorsService) {
  }

  ngOnInit() {
    this.getSensors();
  }

  getSensors() {
    this.sensorService.getSensors()
      .subscribe(
        sensors => {
          this.SensorList = sensors;
        },
        error => this.errorMessage = <any> error
      );
  }
}
