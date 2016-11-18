import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {PageNotFoundComponent} from "./404/404.component";
import {AppRouting} from "./app.routing";
import {ConsoleModule} from "./console/console.module";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ClarityModule,
        ConsoleModule,
        AppRouting,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        LoginComponent,
        RegisterComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
