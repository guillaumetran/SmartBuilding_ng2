import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const publicRoutes: Routes = [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '**', component: PageNotFoundComponent}
];

export const PublicRouting = RouterModule.forChild(publicRoutes);
