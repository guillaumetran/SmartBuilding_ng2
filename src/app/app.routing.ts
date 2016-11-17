import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/index';
import { HomeComponent } from './components/home/index';
import {UsersComponent} from "./components/users/index";
import {LoginComponent} from "./components/login/login.component";
import {ProfilComponent} from "./components/profil/profil.component";


export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profil', component: ProfilComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
