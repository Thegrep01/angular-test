import { PeopleActions } from '../actions/people.actions';

export interface ICharacter {}

const initialState: ICharacter[] = [];

export function peopleReducer(state: ICharacter[] = initialState, action: PeopleActions): ICharacter[] {
    return state;
}
