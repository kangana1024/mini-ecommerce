import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export default function createApolloClient(initialState, ctx) {
    return new ApolloClient({
        ssrMode: Boolean(ctx),
        link: new HttpLink({
            uri: '/api/graphql', 
            credentials: 'same-origin', 
            fetch,
        }),
        cache: new InMemoryCache().restore(initialState),
    });
}