import { Providers } from './ApolloProvider';

export default function Layout({ children }) {
  return <Providers>{children}</Providers>;
}