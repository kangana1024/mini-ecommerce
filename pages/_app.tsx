import React, { useState } from 'react';
import createApolloClient from '../src/helpers/apollo-client';
import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import '../styles/index.css';
import { CartProvider, ItemsProduct } from '../src/contexts/order';

const MyApp = ({ Component, pageProps, apollo }) => {
  const [items, setItem] = useState<ItemsProduct[] | []>([]);
  const [amount, setAmount] = useState<number>(0);
  const [vat, setVat] = useState<number>(0);
  return (
    <ApolloProvider client={apollo}>
      <CartProvider value={{
        items, setItem,
        amount, setAmount,
        vat, setVat
      }}>
        <Component {...pageProps} />
      </CartProvider>
    </ApolloProvider>
  );
}


export default withApollo(({ ctx, initialState }) => {
  return createApolloClient(initialState, ctx);
})(MyApp);
