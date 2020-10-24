import React, { useEffect, useState } from 'react';
interface PaginationInput {
  pagination: { offset: number, first: number, page: number }
}
interface PaginationProps {
  pagination: PaginationInput,
  setPagination: any,
  total: number
}
const Pagination = (props: PaginationProps) => {
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {

    if (props.total) {
      const tmp = Math.ceil(((props.total - 1) / props.pagination.pagination.first) + 1);

      setTotalPage(tmp);
    }

  }, [props.total, props.pagination.pagination.page]);

  const gotoPage = (page: number) => {
    props.setPagination({
      pagination: {
        ...props.pagination.pagination,
        offset: (page - 1) * props.pagination.pagination.first,
        page
      }
    });
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">

        {props.pagination.pagination.offset !== 0 ? <a onClick={e => {
          e.preventDefault();
          gotoPage(props.pagination.pagination.page - 1);
        }} href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
          Previous
    </a> : <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-200 bg-white hover:text-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-300 transition ease-in-out duration-150">Previous</span>}
        {
          (props.pagination.pagination.page + 1) < totalPage ? <a onClick={e => {
            e.preventDefault();
            gotoPage(props.pagination.pagination.page + 1);
          }} href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
            Next
</a> : <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-200 bg-white hover:text-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-300 transition ease-in-out duration-150">
              Next
</span>
        }

      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm leading-5 text-gray-700 mr-1">
            Showing
  <span className="font-medium mr-1 ml-1">{props.pagination.pagination.offset + 1}</span>
        to
  <span className="font-medium mr-1 ml-1 ">{props.pagination.pagination.first}</span>
        of
  <span className="font-medium mr-1 ml-1">{props.total}</span>
        results
      </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex shadow-sm">
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            {
              totalPage && Array.from({ length: totalPage }, (_, n) => n).map(page => {
                return (page+1) === props.pagination.pagination.page ? <span key={"product-pagination-active-" + (page + 1)} className="-ml-px relative inline-flex items-center bg-gray-300 px-4 py-2 border border-gray-300  text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">{page + 1}</span> : <a onClick={e => {
                  e.preventDefault();
                  gotoPage(page+1);
                }} href="#" key={"product-pagination-" + (page + 1)} className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                  {page + 1}
                </a>
              })
            }

            <a href="#" className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination;