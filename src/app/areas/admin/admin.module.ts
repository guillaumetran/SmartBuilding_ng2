import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRouting} from "./admin.routing";
import {AdminComponent} from "./admin.component";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from "./pages/home/home.component";
import {AdminSidebarComponent} from "./shared/admin-sidebar/admin-sidebar.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    HomeComponent,
    AdminSidebarComponent
  ],
  providers: []
})
export class AdminModule { }
