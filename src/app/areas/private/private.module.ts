import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./categories/ressources humaines/users/users.component";
import {UsersService} from "./shared/services/users.service";
import {SharedModule} from "../../shared/shared.module";
import {PrivateRouting} from "./private.routing";
import {PrivateComponent} from "./private.component";
import {LedsComponent} from "./categories/gestion des ressources/leds/leds.component";
import {LedsService} from "./shared/services/leds.service";
import {FormsModule} from "@angular/forms";
import {UserProfileComponent} from "./categories/ressources humaines/user-profile/user-profile.component";
import {AuthGuard} from "../../shared/authguard";
import {DashboardComponent} from "./categories/capteurs/dashboard/dashboard.component";
import {DataSensorService} from "./shared/services/datasensor.service";
import {SensorsService} from "./shared/services/sensors.service";
import {SensorsComponent} from "./categories/gestion des ressources/sensors/sensors.component";
import {RessourcesComponent} from "./categories/gestion des ressources/ressources/ressources.component";
import {RoomsService} from "./shared/services/rooms.service";
import {RoomsComponent} from "./categories/gestion des ressources/rooms/rooms.component";

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
    DashboardComponent,
    SensorsComponent,
    RessourcesComponent,
    RoomsComponent
  ],
  providers: [
    UsersService,
    LedsService,
    AuthGuard,
    DataSensorService,
    SensorsService,
    RoomsService
  ]
})
export class PrivateModule { }
