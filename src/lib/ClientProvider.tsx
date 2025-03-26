'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { makeClient } from './Apollo';

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const client = makeClient();
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}