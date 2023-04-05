import { useQuery } from '@tanstack/react-query';
import { GET_CHARACTER_INFO_QUERY, type ICharacterInfoQueryResponse } from 'entities/character';
import request from 'graphql-request';
import { RICK_AND_MORTY_GQL } from 'shared/constant/urls';

export const useCharacterInfoQuery = (id: string) =>
  useQuery<ICharacterInfoQueryResponse, Error>({
    queryKey: ['character-info', id],
    staleTime: Infinity,
    queryFn: async () => await request(RICK_AND_MORTY_GQL, GET_CHARACTER_INFO_QUERY, { id }),
  });
