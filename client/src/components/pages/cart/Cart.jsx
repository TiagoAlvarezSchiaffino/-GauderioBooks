import React, { useContext } from 'react';
import { context } from '../../../context';

const Cart = () => {
  const { products,
    addProduct,
    deleteAllProducts,
    deleteProduct, } = useContext(context);

    console.log(products)
  return (
    <div className=''>{products[0]?.title}</div>
  )
}

export default Cart;