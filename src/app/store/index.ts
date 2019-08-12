import { ActionReducerMap } from '@ngrx/store';
import { ICharacter, peopleReducer } from './reducers/people.reducer';

export interface IStore {
    people: ICharacter[];
}

export const reducers: ActionReducerMap<IStore> = {
    people: peopleReducer,
};
