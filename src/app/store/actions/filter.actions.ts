import { IMovies, ISpecies } from '../reducers/filter.reducer';

export const GET_MOVIE_PENDING: string = '[Filter] GET_MOVIE_PENDING';
export const GET_MOVIE_SUCCESS: string = '[Filter] GET_MOVIE_SUCCESS';
export const GET_MOVIE_ERROR: string = '[Filter] GET_MOVIE_ERROR';

export const GET_SPECIES_PENDING: string = '[Filter] GET_SPECIES_PENDING';
export const GET_SPECIES_SUCCESS: string = '[Filter] GET_SPECIES_SUCCESS';
export const GET_SPECIES_ERROR: string = '[Filter] GET_SPECIES_ERROR';

export const SET_FILTER_MOVIE: string = '[Filter] SET_FILTER_MOVIE';
export const SET_FILTER_SPECIES: string = '[Filter] SET_FILTER_SPECIES';
export const CLEAR_FILTER: string = '[Filter] CLEAR_FILTER';

export class GetMoviesPending {
    public readonly type: string = GET_MOVIE_PENDING;
}

export class GetMoviesSuccess {
    public readonly type: string = GET_MOVIE_SUCCESS;

    public constructor(public payload: IMovies[]) {}
}

export class GetMovieError {
    public readonly type: string = GET_MOVIE_ERROR;
}
export class GetSpeciesPending {
    public readonly type: string = GET_SPECIES_PENDING;
}

export class GetSpeciesSuccess {
    public readonly type: string = GET_SPECIES_SUCCESS;

    public constructor(public payload: ISpecies[]) {}
}
export class SetMovieFilter {
    public readonly type: string = SET_FILTER_MOVIE;

    public constructor(public payload: string) {}
}
export class SetSpeciesFilter {
    public readonly type: string = SET_FILTER_SPECIES;

    public constructor(public payload: string) {}
}

export class GetSpeciesError {
    public readonly type: string = GET_SPECIES_ERROR;
}
export class ClearFilters {
    public readonly type: string = CLEAR_FILTER;
}

export type FilterActions =
    | GetMoviesPending
    | GetMovieError
    | GetMoviesSuccess
    | GetSpeciesPending
    | GetSpeciesSuccess
    | GetSpeciesError
    | ClearFilters;
