import { useQuery } from '@tanstack/react-query';
import { GET_CHARACTERS_QUERY, type ICharactersQueryResponse } from 'entities/character';
import request from 'graphql-request';
import { RICK_AND_MORTY_GQL } from 'shared/constant/urls';

export const useCharactersQuery = (debouncedSearch: string, page: number) => {
  const { data, isLoading, error } = useQuery<ICharactersQueryResponse, Error>({
    queryKey: ['characters', debouncedSearch, page],
    staleTime: Infinity,
    queryFn: async () => await request(RICK_AND_MORTY_GQL, GET_CHARACTERS_QUERY, { name: debouncedSearch, page }),
  });

  return {
    data,
    isLoading,
    error,
  };
};
