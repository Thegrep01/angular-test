import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './content/main/main.module';
import { reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { en_US, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot(effects),
        SharedModule,
        HttpClientModule,
        NgZorroAntdModule,
        BrowserAnimationsModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent],
})
export class AppModule {}
