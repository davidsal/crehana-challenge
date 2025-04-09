import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const APOLLO_CLIENT = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/',
  }),
  cache: new InMemoryCache(),
});

export default APOLLO_CLIENT;
