import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./404/404.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: PageNotFoundComponent}
];

export const AppRouting = RouterModule.forRoot(appRoutes);
