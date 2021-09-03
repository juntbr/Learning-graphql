import { GraphQLDataSource } from 'apollo-datasource-graphql';
import { gql } from 'apollo-server-micro';

const QUERY_COUNTRY = gql`
query queryDoida{
  countries {
    code
    name
    capital
    languages {
      name
    }
  }
}
`;

// TODO: implement or import lib to sanitize html
const sanitizeHtml = (x) => x;

export default class CountryGraphqlDataSource extends GraphQLDataSource {
  baseURL = 'https://countries.trevorblades.com/';
  async countries() {
    try {
      console.log('banana');
      const response = await this.query(QUERY_COUNTRY);
      console.log('----------->', response);

      return response.data.countries.map(({
        name,
        languages
      }) => ({
        name,
        languages: sanitizeHtml(languages.map(({ name }) => name).join(','))
      }));
    } catch (error) {
      console.log('deu ruim');
      console.error(error);
    }
  }
}