import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies, ISpecies } from '../../store/reducers/filter.reducer';

@Injectable()
export class FilterValuesService {
    public constructor(private _http: HttpClient) {}

    public getMovies(): Observable<IMovies[]> {
        return this._http.get<IMovies[]>('/films');
    }
    public getSpecies(): Observable<ISpecies[]> {
        return this._http.get<ISpecies[]>('/species');
    }
}
