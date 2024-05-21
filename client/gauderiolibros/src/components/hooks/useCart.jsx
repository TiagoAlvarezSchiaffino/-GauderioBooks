import { useState } from "react";

export const useCart = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const id = crypto.randomUUID()
    const {title, price, quantity, image} = product;
    setProducts([...products, {id, title, price, quantity, image}]);
  };

  const deleteProduct = (id) => {
    const productFilter = products.filter((p) => {
      if(p.id !== id){
        return p;
      }
    });
    setProducts(productFilter);
  };

  const deleteAllProducts = () => {
    setProducts([]);
  };

  const totalPrice = products.reduce((acc, product) => {
    return Math.round((acc + product.price * product.quantity) * 100) / 100;
  }, 0);

  return {
    products,
    addProduct,
    deleteAllProducts,
    deleteProduct,
    totalPrice,
  };
};