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

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ConsoleRouting
    ],
    declarations: [
        ConsoleComponent,
        ProfilComponent,
        HeaderComponent,
        SidenavComponent,
        HomeComponent,
        UsersComponent,
        AboutComponent
    ],
    providers: [
        UsersService
    ]
})
export class ConsoleModule { }
