import {Routes, RouterModule} from "@angular/router";
import {FrontComponent} from "./front.component";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";

const frontRoutes: Routes = [
    {
        path: 'login',
        component: FrontComponent,
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]
    }
];

export const FrontRouting = RouterModule.forChild(frontRoutes);
