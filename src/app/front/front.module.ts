import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrontComponent} from "./front.component";
import {FrontRouting} from "./front.routing";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

@NgModule({
  imports: [
      CommonModule,
      FrontRouting
  ],
  declarations: [
      FrontComponent,
      LoginComponent,
      RegisterComponent
  ]
})
export class FrontModule { }
