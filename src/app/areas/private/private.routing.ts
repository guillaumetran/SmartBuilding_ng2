import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./category/ressources humaines/users/users.component";
import {PrivateComponent} from "./private.component";
import {LedsComponent} from "./category/capteurs/leds/leds.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";
import {LedProfileComponent} from "./pages/led-profile/led-profile.component";
import {AuthGuard} from "../../shared/authguard";
import {DashboardComponent} from "./category/capteurs/dashboard/dashboard.component";

const privateRoutes: Routes = [
    {
        path: '',
        component: PrivateComponent,
      canActivate: [AuthGuard],
      //canActivateChild: [AuthGuard],
      children: [
            {path: '', redirectTo: 'users', pathMatch: 'full'},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'users', component: UsersComponent},
            {path: 'profil/:id', component: UserProfileComponent},
            {path: 'leds', component: LedsComponent},
            {path: 'led/:id', component: LedProfileComponent},
        ]
    }
];

export const PrivateRouting = RouterModule.forChild(privateRoutes);
