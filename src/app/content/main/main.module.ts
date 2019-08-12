import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PeopleListModule } from './content/people-list/people-list.module';
import { DetailsModule } from './content/details/details.module';

@NgModule({
    declarations: [MainComponent],
    imports: [MainRoutingModule, SharedModule, PeopleListModule, DetailsModule],
})
export class MainModule {}
