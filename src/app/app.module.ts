import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {PageNotFoundComponent} from "./404/404.component";
import {FrontModule} from "./front/front.module";
import {AppRouting} from "./app.routing";
import {ConsoleModule} from "./console/console.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ClarityModule,
        FrontModule,
        ConsoleModule,
        AppRouting,
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
