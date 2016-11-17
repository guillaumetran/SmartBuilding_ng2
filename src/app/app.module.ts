import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { ROUTING } from "./app.routing";
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {HeaderComponent} from "./components/header/header.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {UsersService} from "./service/users/users.service";
import {UsersComponent} from "./components/users/users.component";
import {HttpModule} from "@angular/http";
import {LoginComponent} from "./components/login/login.component";
import {ProfilComponent} from "./components/profil/profil.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        SidenavComponent,
        HeaderComponent,
        UsersComponent,
        LoginComponent,
        ProfilComponent
    ],
    providers: [
        UsersService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
