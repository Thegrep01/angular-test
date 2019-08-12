import {
    ClearFilters,
    FilterActions,
    GetMoviesSuccess,
    GetSpeciesSuccess,
    SetMovieFilter,
    SetSpeciesFilter,
} from '../actions/filter.actions';
import { IFilterValues } from '../index';

export interface IMovies {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
    url: string;
    created: string;
    edited: string;
}

export interface ISpecies {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    homeworld: string;
    people: string[];
    films: string[];
    url: string;
    created: string;
    edited: string;
}

export interface IFilter {
    movie?: string;
    species?: string;
}

export function filterValuesReducer(state: IFilterValues | null = null, action: FilterActions): IFilterValues | null {
    if (action instanceof GetSpeciesSuccess) {
        return {
            ...state,
            species: action.payload,
        };
    }
    if (action instanceof GetMoviesSuccess) {
        return {
            ...state,
            movies: action.payload,
        };
    }
    return state;
}
export function filterReducer(state: IFilter | null = null, action: FilterActions): IFilter | null {
    if (action instanceof SetMovieFilter) {
        return {
            ...state,
            movie: action.payload,
        };
    }
    if (action instanceof SetSpeciesFilter) {
        return {
            ...state,
            species: action.payload,
        };
    }
    if (action instanceof ClearFilters) {
        return null;
    }
    return state;
}
