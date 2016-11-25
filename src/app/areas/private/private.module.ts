import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./categories/ressources humaines/users/users.component";
import {UsersService} from "./shared/services/users.service";
import {SharedModule} from "../../shared/shared.module";
import {PrivateRouting} from "./private.routing";
import {PrivateComponent} from "./private.component";
import {LedsComponent} from "./categories/capteurs/leds/leds.component";
import {LedsService} from "./shared/services/leds.service";
import {FormsModule} from "@angular/forms";
import {LedProfileComponent} from "./pages/led-profile/led-profile.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";
import {AuthGuard} from "../../shared/authguard";
import {DashboardComponent} from "./categories/capteurs/dashboard/dashboard.component";
import {DataSensorService} from "./shared/services/datasensor.service";
import {SensorsService} from "./shared/services/sensors.service";
import {SensorsComponent} from "./categories/capteurs/sensors/sensors.component";

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
    DashboardComponent,
    SensorsComponent
  ],
  providers: [
    UsersService,
    LedsService,
    AuthGuard,
    DataSensorService,
    SensorsService
  ]
})
export class PrivateModule { }
