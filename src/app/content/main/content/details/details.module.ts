import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { NzBadgeModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [DetailsComponent],
  imports: [SharedModule, DetailsRoutingModule, NzBadgeModule],
})
export class DetailsModule {}
