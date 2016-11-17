import {Routes, RouterModule} from "@angular/router";
import {FrontComponent} from "./front.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const frontRoutes: Routes = [
    {
        path: '',
        component: FrontComponent,
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]
    }
];

export const FrontRouting = RouterModule.forChild(frontRoutes);
