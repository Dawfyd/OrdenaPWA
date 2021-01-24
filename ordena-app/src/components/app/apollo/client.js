import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
});

export default Client;
