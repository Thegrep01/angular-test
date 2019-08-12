import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../store';
import { ICharacter } from '../../../../store/reducers/people.reducer';
import { Observable } from 'rxjs';
import { GetPeoplePending } from '../../../../store/actions/people.actions';
import { filterList } from '../../../../store/selectors/filter.selectors';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
    styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit {
    public people$!: Observable<ICharacter[]>;

    public constructor(private _store: Store<IStore>) {}

    public ngOnInit(): void {
        this._store.dispatch(new GetPeoplePending());
        this.people$ = this._store.select(filterList);
    }

    public prepId(url: string): string {
        const urlArr: string[] = url.split('/');
        return urlArr[urlArr.length - 2];
    }
}
