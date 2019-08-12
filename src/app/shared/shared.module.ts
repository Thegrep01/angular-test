import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './services/people.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { InterceptorService } from './services/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BASE_URL_TOKEN } from '../config';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FilterValuesService } from './services/fiter.service';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    exports: [
        CommonModule,
        NzTableModule,
        NzGridModule,
        NzDescriptionsModule,
        NzDropDownModule,
        NzSliderModule,
        FormsModule,
        NzIconModule,
        NzButtonModule,
    ],
    providers: [
        PeopleService,
        FilterValuesService,
        {
            provide: BASE_URL_TOKEN,
            useValue: environment.baseUrl,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true,
        },
    ],
})
export class SharedModule {}
