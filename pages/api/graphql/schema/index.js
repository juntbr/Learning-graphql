import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Country {
    name: String!
    "shows a list of languages joined with ','"
    languages: String
  }
  type Query {
    "shows a country"
    countries: [Country]
  }
`;

export const resolvers = {
  Query: {
    countries: (_parent, _argsFromQuery, { dataSources }) => {
      return dataSources.countryGraphql.countries();
    }
  }
}