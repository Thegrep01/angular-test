import { ActionReducerMap } from '@ngrx/store';
import { characterReducer, ICharacter, peopleReducer } from './reducers/people.reducer';
import { filterReducer, filterValuesReducer, IFilter, IMovies, ISpecies } from './reducers/filter.reducer';

export interface IFilterValues {
    movies?: IMovies[];
    species?: ISpecies[];
}

export interface IStore {
    people: ICharacter[];
    character: ICharacter | null;
    filterValues: IFilterValues | null;
    filter: IFilter | null;
}

export const reducers: ActionReducerMap<IStore> = {
    people: peopleReducer,
    character: characterReducer,
    filterValues: filterValuesReducer,
    filter: filterReducer,
};
