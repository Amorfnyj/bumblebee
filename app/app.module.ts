import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {TablesComponent} from "./tables/tables.component";
import {AuthGuardTables} from "./_guards/auth.guard.tables";
import {CalendarModule, DataScrollerModule, DataTableModule,PickListModule} from 'primeng/primeng';
import {TableComponent} from "./table/table.component";
import {RestaurantChoiceComponent} from "./restaurant_choice/restaurant_choice.component";
import {OrderDetailsComponent} from "./order_details/order_details.component";
import {AmountComponent} from "./amount/amount.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        CalendarModule,
        DataScrollerModule,
        DataTableModule,
        PickListModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        TablesComponent,
        TableComponent,
        RestaurantChoiceComponent,
        OrderDetailsComponent,
        AmountComponent
    ],
    providers: [
        AuthGuard,
        AuthGuardTables,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }