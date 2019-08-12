import { ICharacter } from '../reducers/people.reducer';

export const GET_PEOPLE_PENDING: string = '[People List] GET_PEOPLE_PENDING';
export const GET_PEOPLE_SUCCESS: string = '[People List] GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_ERROR: string = '[People List] GET_PEOPLE_ERROR';

export class GetPeoplePending {
    public readonly type: string = GET_PEOPLE_PENDING;
}

export class GetPeopleSuccess {
    public readonly type: string = GET_PEOPLE_SUCCESS;

    public constructor(public payload: ICharacter[]) {}
}

export class GetPeopleError {
    public readonly type: string = GET_PEOPLE_ERROR;
}

export type PeopleActions = GetPeoplePending | GetPeopleSuccess | GetPeopleError;
