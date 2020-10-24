import { useLazyQuery } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react';
import { GET_PRODUCTS, IProductItem } from '../querys/product';
import ProductItem from '../cards/productitem';
import Skeleton from 'react-loading-skeleton';
import Pagination from '../ui/pagination';

const ProductLists = () => {

  const [getProducts, { data }] = useLazyQuery(GET_PRODUCTS);
  const [pagination, setPagination] = useState({
    pagination: { offset: 0, first: 24, page: 1 }
  });

  useEffect(() => {
    getProducts({
      variables: {
        pagination: { offset: pagination.pagination.offset, first: pagination.pagination.first }
      }
    });
  }, []);

  useEffect(() => {
    getProducts({
      variables: {
        pagination: { offset: pagination.pagination.offset, first: pagination.pagination.first }
      }
    });
  }, [pagination.pagination.page])

  return (
    <>
      <nav id="store" className="w-full z-30 top-0 px-6 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

          <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
            Store
			</a>

          <div className="flex items-center" id="store-nav-content">

            <a className="pl-3 inline-block no-underline hover:text-black" href="#">
              <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
              </svg>
            </a>

            <a className="pl-3 inline-block no-underline hover:text-black" href="#">
              <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
              </svg>
            </a>

          </div>
        </div>
      </nav>



      {data && data.products && data.products.items ? data.products.items.map((product: IProductItem, index: number) => {
        return <ProductItem id={product.id} description={product.description} price={product.price} name={product.name} image={product.image} slug={product.slug} key={'product-id-' + product.slug + '-' + index} />
      }) : <Skeleton count={5} />}

      <div className="w-full min-w-full">{data && data.products && data.products.count ? <Pagination pagination={pagination} setPagination={setPagination} total={data && data.products && data.products ? data.products.count : 0} /> : null}</div>

    </>
  )
}
export default ProductLists;