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

interface ICharacters {
  info: IPageInfo;
  results: ICharacter[];
}

export interface ICharactersQueryResponse {
  characters: ICharacters;
}

export interface ICharacterInfoQueryResponse {
  character: ICharacterFullInfo;
}

export interface ICharacterFullInfo extends ICharacter {
  origin: ICharacterLocation;
  gender: string;
  location: ICharacterLocation;
  episode: IEpisode[];
}

export interface ICharacterLocation {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: IResident[];
}

interface IResident {
  id: string;
}

interface IEpisode {
  id: string;
  name: string;
}
