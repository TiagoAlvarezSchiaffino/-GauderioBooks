import  { useState } from "react";

export const useCart = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (title) => {
    const productFilter = products.filter((p)=> { p.title !== title })
    setProducts(productFilter);

  };

  const deleteAllProducts = () => {
    setProducts([]);
  };

  return {
    products,
    addProduct,
    deleteAllProducts,
    deleteProduct,
  };
};