interface IPageInfo {
  count: number;
  pages: number;
}

type TLifeStatus = 'Alive' | 'Dead' | 'unknown';

export interface ICharacter {
  name: string;
  id: string;
  image: string;
  status: TLifeStatus;
  species: string;
  origin: { name: string };
  type: string;
}

export interface ICharacterFullInfo extends ICharacter {}

interface ICharacters {
  info: IPageInfo;
  results: ICharacter[];
}

export interface ICharactersQueryResponse {
  characters: ICharacters;
}
