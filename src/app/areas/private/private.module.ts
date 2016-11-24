import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./category/ressources humaines/users/users.component";
import {UsersService} from "./shared/services/users.service";
import {SharedModule} from "../../shared/shared.module";
import {PrivateRouting} from "./private.routing";
import {PrivateComponent} from "./private.component";
import {LedsComponent} from "./category/capteurs/leds/leds.component";
import {LedsService} from "./shared/services/leds.service";
import {FormsModule} from "@angular/forms";
import {LedProfileComponent} from "./pages/led-profile/led-profile.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";
import {AuthGuard} from "../../shared/authguard";
import {DashboardComponent} from "./category/capteurs/dashboard/dashboard.component";
import {DataSensorService} from "./shared/services/datasensor.service";

@NgModule({
  imports: [
    CommonModule,
    PrivateRouting,
    SharedModule,
    FormsModule
  ],
  declarations: [
    UsersComponent,
    UserProfileComponent,
    PrivateComponent,
    LedsComponent,
    LedProfileComponent,
    DashboardComponent
  ],
  providers: [
    UsersService,
    LedsService,
    AuthGuard,
    DataSensorService
  ]
})
export class PrivateModule { }
