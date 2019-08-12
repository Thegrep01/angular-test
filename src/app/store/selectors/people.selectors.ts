import { IStore } from '../index';

// tslint:disable-next-line:no-any
export const selectPeople: any = (state: IStore) => state.people;
// tslint:disable-next-line:no-any
export const selectCharacter: any = (state: IStore) => state.character;
