
import CountryGraphqlDataSource from './countryGraphqlDataSource';

export const dataSources = () => {
  return {
    countryGraphql: new CountryGraphqlDataSource(),
  }
};