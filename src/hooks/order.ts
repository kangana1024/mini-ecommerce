import { useContext, useEffect } from "react";
import Cart, { OrderState } from "../contexts/order";

export const useCartSync = () => {
  const { items,
    setItem,
    amount,
    setAmount,
    vat,
    setVat } = useContext<OrderState>(Cart);

  useEffect(() => {
    if (items && items.length < 1 && window) {

      const orderStore = localStorage.getItem('cart');

      if (orderStore && items.length === 0) {

        const order = JSON.parse(orderStore);
        order.items && setItem(order.items);
        order.amount && setAmount(order.amount);
        order.vat && setVat(order.vat)
      }
    } else {
      localStorage.setItem('cart', JSON.stringify({
        items,
        amount,
        vat
      }))
    }
  }, [JSON.stringify(items)])


  return {
    items,
    setItem,
    amount,
    setAmount,
    vat,
    setVat
  };
}