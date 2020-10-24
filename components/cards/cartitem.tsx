import React from 'react';
import Counter from '../inputs/counter';
export interface IProductItem {
  id: string,
  name: string,
  description: string,
  image: string,
  price: number,
  slug: string,
  qty: number
}
export interface CartItemProps {
  id: string,
  name: string,
  description: string,
  image: string,
  price: number,
  slug: string,
  setItem: any,
  items: any
}
const CartItem = (props: CartItemProps) => {
  return (
    <div className="py-3 border-b border-grey-dark flex-row justify-between items-center mb-0 md:flex">
      <i className="bx bx-x text-grey-darkest text-2xl sm:text-3xl mr-6 cursor-pointer"></i>
      <div className="w-full lg:w-3/5 xl:w-1/2 flex flex-row items-center border-b-0 border-grey-dark pt-0 pb-0 text-left">
        <div className="w-20 mx-0 relative pr-0">
          <div className="h-20 rounded flex items-center justify-center">
            <div className="w-16 h-16 mx-auto bg-center bg-no-repeat bg-cover" style={{
              backgroundImage: 'url(' + props.image + ')'
            }}>
            </div>
          </div>
        </div>
        <span className="font-hkregular text-secondary text-base mt-2">{props.name}</span>
      </div>
      <div className="w-full sm:w-1/5 xl:w-1/4 text-center border-b-0 border-grey-dark pb-0">
        <div className="mx-auto mr-8 xl:mr-4">
          <div className="flex justify-center">
            <Counter id={props.id} setItem={props.setItem} items={props.items} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/5 xl:w-1/4 text-right pr-0
                    xl:pr-10 pb-4">
        <span className="font-hkregular text-secondary">{new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(props.price)}</span>
      </div>
    </div>
  )
}
export default CartItem;