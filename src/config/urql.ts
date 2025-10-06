import { createClient, cacheExchange, fetchExchange } from 'urql';

// Configure your GraphQL API endpoint here
const GRAPHQL_ENDPOINT = 'http://localhost:4000/graphql';

export const urqlClient = createClient({
  url: GRAPHQL_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
});