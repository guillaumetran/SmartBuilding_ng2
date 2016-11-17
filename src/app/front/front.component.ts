import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
  selector: 'app-front',
  template: '<router-outlet></router-outlet>'
})
export class FrontComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
