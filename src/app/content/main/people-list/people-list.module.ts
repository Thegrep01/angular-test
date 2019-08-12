import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PeopleListRoutingModule } from './people-list-routing.module';
import { PeopleListComponent } from './people-list.component';

@NgModule({
    declarations: [PeopleListComponent],
    imports: [SharedModule, PeopleListRoutingModule],
})
export class PeopleListModule {}
