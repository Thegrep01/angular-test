import { Component, OnInit } from '@angular/core';
import {
    ClearFilters,
    GetMoviesPending,
    GetSpeciesPending,
    SetMovieFilter,
    SetSpeciesFilter,
} from '../../../../../store/actions/filter.actions';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../../store';
import { selectAllMovies, selectAllSpecies } from '../../../../../store/selectors/filter.selectors';
import { Observable } from 'rxjs';
import { IFilter, IMovies, ISpecies } from '../../../../../store/reducers/filter.reducer';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
    public ageValues: number[] = [20, 50];
    public movies$!: Observable<IMovies[]>;
    public species$!: Observable<ISpecies[]>;

    public constructor(private _store: Store<IStore>) {}

    public ngOnInit(): void {
        this._store.dispatch(new GetMoviesPending());
        this._store.dispatch(new GetSpeciesPending());
        this.movies$ = this._store.select(selectAllMovies);
        this.species$ = this._store.select(selectAllSpecies);
    }

    public setFilter(filter: IFilter): void {
        if (filter.movie) {
            this._store.dispatch(new SetMovieFilter(filter.movie));
        } else if (filter.species) {
            this._store.dispatch(new SetSpeciesFilter(filter.species));
        }
    }

    public clear(): void {
        this._store.dispatch(new ClearFilters());
    }
}
