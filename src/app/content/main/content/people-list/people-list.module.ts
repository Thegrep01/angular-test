import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PeopleListRoutingModule } from './people-list-routing.module';
import { PeopleListComponent } from './people-list.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
    declarations: [PeopleListComponent, FilterComponent],
    imports: [SharedModule, PeopleListRoutingModule],
})
export class PeopleListModule {}
