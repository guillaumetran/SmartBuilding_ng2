import { Component, OnInit } from '@angular/core';
import {LedsService} from "../../services/leds/leds.service";
import {Led} from "../../models/led";

@Component({
    moduleId: module.id,
    selector: 'app-leds',
    templateUrl: 'leds.component.html',
})
export class LedsComponent implements OnInit {
    LedList: Led[];
    LedAdd: Led;
    errorMessage: string;

  constructor(private ledService: LedsService) {
  }

  ngOnInit() {
      this.LedAdd = new Led();
      this.getLeds();
  }

  addLed() {
      console.log("add");
      if (this.LedAdd.LedName != null){
          console.log("in");
          this.ledService.addLed(this.LedAdd)
              .subscribe(
                  led => {
                      this.resetLedAdd();
                      console.log(led);
                      this.LedList.push(led);
                  },
                  error => {
                      this.errorMessage = <any> error;
                      this.resetLedAdd();
                  }
              )
      }
  }

  getLeds() {
    this.ledService.getLeds()
      .subscribe(
        leds => {
          this.LedList = leds;
          console.log(leds);
        },
        error => this.errorMessage = <any> error
      );
  }

  removeLed(id: number){
      this.ledService.removeLed(id)
          .subscribe(
              leds => {
                  let index = this.LedList.indexOf(leds);
                  this.LedList.splice(index, 1);
              },
              error => this.errorMessage = <any> error
          );
  }

  resetLedAdd(){
      this.LedAdd = new Led();
  }
}
