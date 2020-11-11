import React from 'react';
import { useCartSync } from '../../src/hooks/order';
import { IProductItem } from '../querys/product';
import LazyLoad from 'react-lazyload';

const ProductItem = (props: IProductItem) => {
  const { setItem, items } = useCartSync();

  const handleCart = (e) => {
    e.preventDefault();
    let tmp = [...items];
    const myItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      qty: 1
    }
    const hasItem = [...items].findIndex(item => {
      return item.id === props.id
    });

    if (hasItem > -1) {
      tmp[hasItem].qty = tmp[hasItem].qty + 1;
      setItem([...tmp]);
    } else {
      setItem([...items, { ...myItem }])
    }

  }
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <a href="#" className="relative">
        <LazyLoad height={300} width={400}>
          <div className="aspect-ratio-4/3 bg-gray-700"></div>
          <img className="hover:grow hover:shadow-lg absolute left-0 top-0 w-full h-full object-cover" alt={props.name} src={props.image} /></LazyLoad>
        <div className="pt-3 flex items-center justify-between">
          <p className="">{props.name}</p>
          <button type="button" onClick={handleCart}>
            <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
          </button>
        </div>
        <p className="pt-1 text-gray-900">{new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(props.price)}</p>
      </a>
    </div>
  )
}
export default ProductItem;