import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from '../../store/reducers/people.reducer';
// import { ICharacter } from '../../store/reducers/people.reducer';

@Injectable()
export class PeopleService {
    public constructor(private _http: HttpClient) {}

    public getPeople(): Observable<ICharacter[]> {
        return this._http.get<ICharacter[]>('/people');
    }
    public getCharacter(id: string): Observable<ICharacter> {
        return this._http.get<ICharacter>(`/people/${id}`);
    }
}
