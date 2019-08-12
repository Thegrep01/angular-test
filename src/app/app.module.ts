import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './content/main/main.module';
import { reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
