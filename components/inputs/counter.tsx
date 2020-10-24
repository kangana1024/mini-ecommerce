import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
export interface IProductItem {
  id: string,
  name: string,
  description: string,
  image: string,
  price: number,
  slug: string,
  qty: number
}
interface CounterProps {
  setItem: any,
  items: IProductItem[],
  id: string
}
const Counter = (props: CounterProps) => {
  const [qty, setQty] = useState<number>(0);

  useEffect(() => {

    if (props.items.length > 0) {
      const tmp = props.items.find(obj => {
        return obj.id === props.id
      });
      if (tmp && tmp.qty) {
        setQty(tmp.qty);
      }
    }
  }, [JSON.stringify(props.items)]);


  const handleAddItem = () => {

    let tmp = [...props.items];

    const findIndex = [...props.items].findIndex(obj => {
      return obj.id === props.id
    });
    if (findIndex > -1) {
      tmp[findIndex].qty = tmp[findIndex].qty + 1;

      props.setItem([...tmp]);
    }
  }
  const handleSubItem = () => {

    let tmp = [...props.items];

    const findIndex = [...props.items].findIndex(obj => {
      return obj.id === props.id
    });
    if (findIndex > -1) {

      if (tmp[findIndex].qty > 1) {
        tmp[findIndex].qty = tmp[findIndex].qty - 1;
        props.setItem([...tmp]);
      } else {
        Swal.fire({
          title: 'Do you want to save the changes?',
          showCancelButton: true,
          confirmButtonText: `Confirm!`,
        }).then((result) => {
          if (result.isConfirmed) {
            const newCart = [...props.items].filter(obj => {
              return obj.id !== props.id
            });
            if (typeof window !== 'undefined' && newCart.length === 0) {
              localStorage.removeItem('cart');
            }
            props.setItem([...newCart]);
          }
        });
      }
    }
  }
  return (
    <div className="vertical-center bg-gray-300 rounded-lg">
      <div className="custom-number-input h-10 w-32">
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
          <button type="button" onClick={handleSubItem} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input type="text" className="outline-none focus:outline-none w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default text-center flex items-center text-gray-700" name="custom-input-number" disabled value={qty} />
          <button type="button" onClick={handleAddItem} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Counter;