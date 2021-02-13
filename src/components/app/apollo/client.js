import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const Client = new ApolloClient({
  uri: "https://ordena-api-dev.herokuapp.com/graphql",
  cache: new InMemoryCache()
});

export default Client;
