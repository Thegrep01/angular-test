import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PeopleListModule } from './people-list/people-list.module';

@NgModule({
    declarations: [MainComponent],
    imports: [MainRoutingModule, SharedModule, PeopleListModule],
})
export class MainModule {}
