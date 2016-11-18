import {Routes, RouterModule} from "@angular/router";
import {ConsoleComponent} from "./console.component";
import {ProfilComponent} from "./components/profil/profil.component";
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {AboutComponent} from "./components/about/about.component";
import {LedsComponent} from "./components/leds/leds.component";

const frontRoutes: Routes = [
    {
        path: '',
        component: ConsoleComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'users', component: UsersComponent},
            {path: 'about', component: AboutComponent},
            {path: 'profil/:id', component: ProfilComponent},
            {path: 'leds', component: LedsComponent}
        ]
    }
];

export const ConsoleRouting = RouterModule.forChild(frontRoutes);
