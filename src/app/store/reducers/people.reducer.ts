import { GetPeopleSuccess, PeopleActions, SetCharacterDetailsSuccess } from '../actions/people.actions';

export interface ICharacter {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
    url: string;
    created: string;
    edited: string;
}

const initialPeopleState: ICharacter[] = [];
const initialICharacterState: ICharacter | null = null;

export function peopleReducer(state: ICharacter[] = initialPeopleState, action: PeopleActions): ICharacter[] {
    if (action instanceof GetPeopleSuccess) {
        return action.payload;
    }
    return state;
}
export function characterReducer(
    state: ICharacter | null = initialICharacterState,
    action: PeopleActions
): ICharacter | null {
    if (action instanceof SetCharacterDetailsSuccess) {
        return action.payload;
    }
    return state;
}
