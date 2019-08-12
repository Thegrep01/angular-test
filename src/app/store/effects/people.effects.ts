import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    GET_PEOPLE_PENDING,
    GetPeopleError,
    GetPeopleSuccess,
    SET_CHARACTER_PENDING,
    SetCharacterDetailsError,
    SetCharacterDetailsSuccess,
} from '../actions/people.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
// import { ICharacter } from '../reducers/people.reducer';
import { of } from 'rxjs';
import { PeopleService } from '../../shared/services/people.service';
import { ICharacter } from '../reducers/people.reducer';

@Injectable()
export class PeopleEffects {
    @Effect()
    // tslint:disable-next-line:no-any
    public loadPeople$: any = this.actions$.pipe(
        ofType(GET_PEOPLE_PENDING),
        switchMap(() =>
            this.peopleService.getPeople().pipe(
                // tslint:disable-next-line:no-any
                map((data: ICharacter[]) => new GetPeopleSuccess(data)),
                catchError((err: Error) => {
                    console.error(err);
                    return of(new GetPeopleError());
                })
            )
        )
    );
    @Effect()
    // tslint:disable-next-line:no-any
    public loadCharacter$: any = this.actions$.pipe(
        ofType(SET_CHARACTER_PENDING),
        // tslint:disable-next-line:no-any
        map((action: any) => action.payload),
        switchMap((id: string) =>
            this.peopleService.getCharacter(id).pipe(
                map((data: ICharacter) => new SetCharacterDetailsSuccess(data)),
                catchError((err: Error) => {
                    console.error(err);
                    return of(new SetCharacterDetailsError());
                })
            )
        )
    );

    public constructor(private actions$: Actions, private peopleService: PeopleService) {}
}
