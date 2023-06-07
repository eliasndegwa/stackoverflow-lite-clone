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
        LandingComponent
    ]
})
export class AppModule { }
