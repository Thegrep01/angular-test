import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ICharacter } from '../../../../store/reducers/people.reducer';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../store';
import { SetCharacterDetailsPending } from '../../../../store/actions/people.actions';
import { selectCharacter } from '../../../../store/selectors/people.selectors';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
    public character!: ICharacter;
    private _controlUnsubscribe$$: Subject<void> = new Subject<void>();
    private _id: string = '0';

    public constructor(private _store: Store<IStore>, private _activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        // tslint:disable-next-line:no-any
        this._activatedRoute.params.subscribe((params: any) => (this._id = params.id));
        this._store.dispatch(new SetCharacterDetailsPending(this._id));
        this._store
            .select(selectCharacter)
            .pipe(takeUntil(this._controlUnsubscribe$$))
            .subscribe((character: ICharacter) => (this.character = character));
    }

    public ngOnDestroy(): void {
        this._controlUnsubscribe$$.next();
    }
}
