import { Component, OnInit } from '@angular/core';
import {Led} from "../../../shared/models/led";
import {LedsService} from "../../../shared/services/leds.service";

@Component({
    selector: 'ressources-leds',
    templateUrl: 'leds.component.html',
})
export class LedsComponent implements OnInit {
    LedList: Led[];
    LedAdd: Led;
    LedEdit: Led;
    editLedIndex: number;
    removeLedID: number;
    errorMessage: string;

  constructor(private ledsService: LedsService) {
  }

  ngOnInit() {
      this.LedAdd = new Led();
      this.LedEdit = new Led();
      this.getLeds();
  }

  addLed() {
      console.log("add");
      if (this.LedAdd.LedName != null){
          console.log("in");
          this.ledsService.addLed(this.LedAdd)
              .subscribe(
                  led => {
                    this.LedList.push(led);
                    this.resetLed();
                  },
                  error => {
                      this.errorMessage = <any> error;
                      this.resetLed();
                  }
              )
      }
  }

  updateLed(){
    this.ledsService.updateLed(this.LedEdit.LedId, this.LedEdit)
      .subscribe(
        led => {
          this.LedList[this.editLedIndex] = this.LedEdit;
        },
        error => {
          this.errorMessage = <any> error;
        }
      )
  }

  getLeds() {
    this.ledsService.getLeds()
      .subscribe(
        leds => {
          this.LedList = leds;
        },
        error => this.errorMessage = <any> error
      );
  }

  removeLed(id: number){
      this.ledsService.removeLed(id)
          .subscribe(
              leds => {
                  let index = this.LedList.indexOf(leds);
                  this.LedList.splice(index, 1);
              },
              error => this.errorMessage = <any> error
          );
  }

  resetLed(){
      this.LedAdd = new Led();
  }

  selectLedEdit(index: number, led: Led) {
    this.editLedIndex = index;
    this.LedEdit = new Led();
    this.LedEdit.LedId = led.LedId;
    this.LedEdit.LedName = led.LedName;
    this.LedEdit.Latitude = led.Latitude;
    this.LedEdit.Longitude = led.Longitude;
    this.LedEdit.Controleur = led.Controleur;
    this.LedEdit.Rgpio = led.Rgpio;
    this.LedEdit.Ggpio = led.Ggpio;
    this.LedEdit.Bgpio = led.Bgpio;
  }

  getPagination(): number {
    if (this.LedList.length < 10){
      return this.LedList.length
    }
    else return 10
  }
}
