import React from 'react';
export type OrderState = {
  items: ItemsProduct[],
  setItem: React.Dispatch<React.SetStateAction<ItemsProduct[] | []>>,
  amount: number,
  setAmount: React.Dispatch<React.SetStateAction<number>>,
  vat: number,
  setVat: React.Dispatch<React.SetStateAction<number>>
}
export type ItemsProduct = {
  id: string,
  name: string,
  price: number,
  image?: string,
  qty: number,
}
let initState: OrderState = {
  items: [],
  setItem: () => { },
  amount: 0,
  setAmount: () => { },
  vat: 0,
  setVat: () => { }
}
if (typeof window !== 'undefined') {
  const orderStore = localStorage.getItem('cart');

  if (orderStore) {
    const order = JSON.parse(orderStore);
    initState.items = order.items;
    initState.amount = order.amount;
    initState.vat = order.vat;
  }
}


const Cart = React.createContext<OrderState>(initState);

export const CartProvider = Cart.Provider;
export const CartConsumer = Cart.Consumer;

export default Cart;