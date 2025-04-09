import { gql } from '@apollo/client';

export const GET_COUNTRIES_GRAPHQL_QUERY = gql`
  query ListCountries {
    countries {
      name
      code
      capital
      continent {
        name
      }
      languages {
        name
      }
      currency
      emojiU
    }
  }
`;
