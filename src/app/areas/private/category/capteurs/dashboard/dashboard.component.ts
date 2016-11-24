/**
 * Created by Guillaume TRAN on 23/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import {DataSensor} from "../../../shared/models/datasensor";
import {DataSensorService} from "../../../shared/services/datasensor.service";

@Component({
  selector: 'private-dashboard',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  AlertList: DataSensor[];
  errorMessage: string;

  constructor(private dataSensorService: DataSensorService) {
  }

  ngOnInit() {
    this.getAlerts("sensoralerts");
  }

  getAlerts(table: string){
    this.dataSensorService.getDataSensor(table)
      .subscribe(
        alerts => {
          this.AlertList = alerts;
          console.log(alerts);
        },
        error => this.errorMessage = <any> error
      );
  }
}
