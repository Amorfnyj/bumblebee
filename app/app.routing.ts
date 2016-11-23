import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {TablesComponent} from "./tables/tables.component";
import {AuthGuardTables} from "./_guards/auth.guard.tables";
import {TableComponent} from "./table/table.component";
import {RestaurantChoiceComponent} from "./restaurant_choice/restaurant_choice.component";
import {OrderDetailsComponent} from "./order_details/order_details.component";
import {AmountComponent} from "./amount/amount.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'tables', component: TablesComponent},
    { path: 'table', component: TableComponent},
    { path: 'restaurant_choice', component: RestaurantChoiceComponent},
    { path: 'order_details', component: OrderDetailsComponent},
    { path: 'amount', component: AmountComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);