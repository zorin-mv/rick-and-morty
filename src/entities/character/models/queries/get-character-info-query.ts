import { gql } from 'graphql-request';

export const GET_CHARACTER_INFO_QUERY = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      status
      species
      type
      origin {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
      gender
      location {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
      episode {
        id
        name
      }
    }
  }
`;
