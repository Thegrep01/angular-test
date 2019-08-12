import { ICharacter } from '../reducers/people.reducer';

export const GET_PEOPLE_PENDING: string = '[People List] GET_PEOPLE_PENDING';
export const GET_PEOPLE_SUCCESS: string = '[People List] GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_ERROR: string = '[People List] GET_PEOPLE_ERROR';

export const SET_CHARACTER_PENDING: string = '[Details] SET_CHARACTER_PENDING';
export const SET_CHARACTER_SUCCESS: string = '[Details] SET_CHARACTER_SUCCESS';
export const SET_CHARACTER_ERROR: string = '[Details] SET_CHARACTER_ERROR';

export class GetPeoplePending {
    public readonly type: string = GET_PEOPLE_PENDING;
}

export class GetPeopleSuccess {
    public readonly type: string = GET_PEOPLE_SUCCESS;

    public constructor(public payload: ICharacter[]) {}
}
export class SetCharacterDetailsPending {
    public readonly type: string = SET_CHARACTER_PENDING;

    public constructor(public payload: string) {}
}
export class SetCharacterDetailsSuccess {
    public readonly type: string = SET_CHARACTER_SUCCESS;

    public constructor(public payload: ICharacter) {}
}
export class SetCharacterDetailsError {
    public readonly type: string = SET_CHARACTER_ERROR;
}

export class GetPeopleError {
    public readonly type: string = GET_PEOPLE_ERROR;
}

export type PeopleActions =
    | GetPeoplePending
    | GetPeopleSuccess
    | GetPeopleError
    | SetCharacterDetailsPending
    | SetCharacterDetailsSuccess
    | SetCharacterDetailsError;
