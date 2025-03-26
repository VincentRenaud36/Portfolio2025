'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

export function makeClient() {
  return new ApolloClient({
    uri: 'https://eu-west-2.cdn.hygraph.com/content/cm5nss67y01sx08uy77scr6mv/master',
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}