import { gql } from 'graphql-request';

export const GET_CHARACTERS_QUERY = gql`
  query getCharacters($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
      }
      results {
        name
        id
        image
        status
        species
        type
        origin {
          name
        }
      }
    }
  }
`;
