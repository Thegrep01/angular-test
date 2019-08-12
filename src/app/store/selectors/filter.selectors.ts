import { IStore } from '../index';
import { createSelector } from '@ngrx/store';
import { selectPeople } from './people.selectors';
import { ICharacter } from '../reducers/people.reducer';

// tslint:disable-next-line:no-any
export const selectAllMovies: any = (state: IStore) => state.filterValues && state.filterValues.movies;
// tslint:disable-next-line:no-any
export const selectAllSpecies: any = (state: IStore) => state.filterValues && state.filterValues.species;
// tslint:disable-next-line:no-any
export const selectMovies: any = (state: IStore) => state.filter && state.filter.movie;
// tslint:disable-next-line:no-any
export const selectSpecies: any = (state: IStore) => state.filter && state.filter.species;

// tslint:disable-next-line:no-any
export const filterList: any = createSelector(
    selectMovies,
    selectSpecies,
    selectPeople,
    (movieFilter: string, speciesFilter: string, people: ICharacter[]) => {
        if (!movieFilter && !speciesFilter) {
            return people;
        }
        let result: ICharacter[] = people;
        if (movieFilter) {
            result = people.filter((character: ICharacter) => character.films.includes(movieFilter));
        }
        if (speciesFilter && result.length > 0) {
            result = result.filter((character: ICharacter) => character.species.includes(speciesFilter));
        } else if (speciesFilter && result.length === 0) {
            result = people.filter((character: ICharacter) => character.species.includes(speciesFilter));
        }
        return result;
    }
);
