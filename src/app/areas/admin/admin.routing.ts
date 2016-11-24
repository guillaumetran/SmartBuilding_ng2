import {Routes, RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {HomeComponent} from "./pages/home/home.component";

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent}
        ]
    }
];

export const AdminRouting = RouterModule.forChild(adminRoutes);
