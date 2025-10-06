import { createClient, cacheExchange, fetchExchange } from 'urql';

// Configure your GraphQL API endpoint from environment variables
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:4000/graphql';

// Log the endpoint being used (only in development)
if (import.meta.env.DEV) {
  console.log('🚀 GraphQL Endpoint:', GRAPHQL_ENDPOINT);
}

export const urqlClient = createClient({
  url: GRAPHQL_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
  // Add request policy for better caching
  requestPolicy: 'cache-first',
});