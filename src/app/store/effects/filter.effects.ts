import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
// import { ICharacter } from '../reducers/people.reducer';
import { of } from 'rxjs';
import { IMovies, ISpecies } from '../reducers/filter.reducer';
import {
  GET_MOVIE_PENDING,
  GET_SPECIES_PENDING,
  GetMovieError,
  GetMoviesSuccess, GetSpeciesError,
  GetSpeciesSuccess,
} from '../actions/filter.actions';
import { FilterValuesService } from '../../shared/services/fiter.service';

@Injectable()
export class FilterValuesEffects {
    @Effect()
    // tslint:disable-next-line:no-any
    public loadMovies$: any = this.actions$.pipe(
        ofType(GET_MOVIE_PENDING),
        switchMap(() =>
            this.filterValuesService.getMovies().pipe(
                // tslint:disable-next-line:no-any
                map((data: IMovies[]) => new GetMoviesSuccess(data)),
                catchError((err: Error) => {
                    console.error(err);
                    return of(new GetMovieError());
                })
            )
        )
    );
    @Effect()
    // tslint:disable-next-line:no-any
    public loadSpecies$: any = this.actions$.pipe(
        ofType(GET_SPECIES_PENDING),
        switchMap(() =>
            this.filterValuesService.getSpecies().pipe(
                // tslint:disable-next-line:no-any
                map((data: ISpecies[]) => new GetSpeciesSuccess(data)),
                catchError((err: Error) => {
                    console.error(err);
                    return of(new GetSpeciesError());
                })
            )
        )
    );

    public constructor(private actions$: Actions, private filterValuesService: FilterValuesService) {}
}
