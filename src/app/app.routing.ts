import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./404/404.component";

const appRoutes: Routes = [
    {path: '**', component: PageNotFoundComponent}
];

export const AppRouting = RouterModule.forRoot(appRoutes);
