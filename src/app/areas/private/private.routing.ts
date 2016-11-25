import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./categories/ressources humaines/users/users.component";
import {PrivateComponent} from "./private.component";
import {UserProfileComponent} from "./categories/ressources humaines/user-profile/user-profile.component";
import {AuthGuard} from "../../shared/authguard";
import {DashboardComponent} from "./categories/capteurs/dashboard/dashboard.component";
import {RessourcesComponent} from "./categories/gestion des ressources/ressources/ressources.component";

const privateRoutes: Routes = [
    {
        path: '',
        component: PrivateComponent,
      canActivate: [AuthGuard],
      children: [
            {path: '', redirectTo: 'ressources', pathMatch: 'full'},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'users', component: UsersComponent},
            {path: 'profil/:id', component: UserProfileComponent},
            {path: 'ressources', component: RessourcesComponent},
      ]
    }
];

export const PrivateRouting = RouterModule.forChild(privateRoutes);
