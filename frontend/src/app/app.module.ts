import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HeaderComponent } from "./components/header/header.component";
import { LandingComponent } from "./components/landing/landing.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";


@NgModule({
    declarations: [
        AppComponent,
        FormatDatePipe,
        FilterPipe,
        SortPipe,
        TruncatePipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        LandingComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ]
})
export class AppModule { }
