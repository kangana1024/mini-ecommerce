import React, { useEffect } from 'react';
import CartItem from '../components/cards/cartitem';
import LayoutWrapper from '../components/layout';
import { useCartSync } from '../src/hooks/order';

export default function Cart() {
  const { items, amount, vat, setItem, setAmount, setVat } = useCartSync();

  useEffect(() => {
    if (items.length > -1) {
      const sumAmount = [...items].reduce((total, item) => {
        return total + (item.qty * item.price)
      }, 0);
      setAmount(sumAmount);
      setVat(sumAmount * 0.07);
    }
  }, [JSON.stringify(items)]);


  return (
    <LayoutWrapper>
      <section className="bg-white pt-8 md:px-0 px-3">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-5">
          <div className="flex flex-wrap items-center">
            <a href="/cart/" className="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary
             
        ">Cart</a>
            <strong className="mx-2"><small>&gt;</small></strong>


            <span className="  transition-all border-b border-transparent hover:border-primary text-sm text-secondary hover:text-primary
            font-hkregular 
        ">Payment method</span>
            <i className="bx bx-chevron-right text-sm text-transparent px-2"></i>

          </div>


        </div>
      </section>
      <section>
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-5  md:px-0 px-3">
          <div className="w-full md:w-3/5">

            <div className="container mx-auto flex items-center flex-wrap pb-0 md:pb-3">
              <h1 className="text-secondary text-2xl pb-3 text-center"> Cart Items</h1>
            </div>

            <div className="block">
              <div className="w-full flex justify-between border-b border-grey-darker">
                <div className="w-1/3 lg:w-3/5 xl:w-1/2 sm:pl-12 pb-2">
                  <p className="text-secondary text-center text-sm uppercase">
                    Product Name</p>
                </div>
                <div className="w-1/3 sm:w-1/6 lg:w-1/5 xl:w-1/4 pb-2 text-right sm:mr-2 md:mr-18 lg:mr-12 xl:mr-18">
                  <p className="text-secondary text-center text-sm uppercase">
                    Quantity</p>
                </div>
                <div className="w-1/3 lg:w-1/5 xl:w-1/4 pb-2 text-right md:pr-10">
                  <p className="text-secondary text-center text-sm uppercase">
                    Price</p>
                </div>
              </div>
            </div>

            {items && items.map((product: any, index: number) => {
              return <CartItem id={product.id} setItem={setItem} items={items} description={product.description} price={product.price} name={product.name} image={product.image} slug={product.slug} key={'cart-id-' + product.slug + '-' + index} />
            })}



          </div>
          <div className="w-full pl-0 md:pl-3 pt-2 md:pt-2 md:w-2/5">
            <div className="bg-gray-100 py-8 px-8">
              <h4 className="font-hkbold text-secondary text-2xl pb-3 text-center sm:text-left">
                Cart Totals</h4>
              <div className="mb-12 pt-4">
                <p className="font-hkbold text-secondary pt-1 pb-2">Cart Total
                    </p>
                <div className="border-b border-grey-darker pb-1 flex justify-between">
                  <span className="font-hkregular text-secondary">Subtotal</span>
                  <span className="font-hkregular text-secondary">{amount.toLocaleString()}</span>
                </div>
                <div className="border-b border-grey-darker pt-2 pb-1 flex justify-between">
                  <span className="font-hkregular text-secondary">Vat 7%</span>
                  <span className="font-hkregular text-secondary">{vat.toLocaleString()}</span>
                </div>
                <div className="pt-3 flex justify-between">
                  <span className="font-hkbold text-secondary">Total</span>
                  <span className="font-hkbold text-secondary">{(amount + vat).toLocaleString()}</span>
                </div>
                <div>
                  <button className="bg-blue-500 text-white hover:bg-blue-700 w-full mt-8 py-2">
                    PROCEED TO CHECKOUT
</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </LayoutWrapper >
  );
}