import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                data: { state: 'list' },
                loadChildren: './content/people-list/people-list.module#PeopleListModule',
            },
            {
                path: 'character/:id',
                loadChildren: './content/details/details.module#DetailsModule',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {}
