import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfilComponent} from "./components/profil/profil.component";
import {ConsoleComponent} from "./console.component";
import {ConsoleRouting} from "./console.routing";
import {HeaderComponent} from "./components/header/header.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {UsersService} from "./services/users/users.service";
import {AboutComponent} from "./components/about/about.component";
import {ClarityModule} from "clarity-angular";
import {LedsComponent} from "./components/leds/leds.component";
import {LedsService} from "./services/leds/leds.service";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        FormsModule,
        ConsoleRouting
    ],
    declarations: [
        ConsoleComponent,
        ProfilComponent,
        HeaderComponent,
        SidenavComponent,
        HomeComponent,
        UsersComponent,
        AboutComponent,
        LedsComponent
    ],
    providers: [
        UsersService,
        LedsService
    ]
})
export class ConsoleModule { }
