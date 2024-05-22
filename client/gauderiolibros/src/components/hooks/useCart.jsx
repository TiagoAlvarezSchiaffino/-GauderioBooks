import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useCart = () => {
  const [products, setProducts] = useState([]);
  const [badgeCount, setbadgeCount] = useState(0);
  const [storageProducts, setStorageProducts] = useLocalStorage("products", []);

  useEffect(() => {
    badgeCounter();
  }, [storageProducts]);

  const addProduct = (product) => {
    const id = crypto.randomUUID();
    let refCart = [...storageProducts];
    const { title, price, quantity, image } = product;
    let productIndex = refCart.findIndex((elem) => elem.title === title);

    if (productIndex == -1) {
      setStorageProducts([...storageProducts, { id, title, price, quantity, image }]);
    } else {
      refCart[productIndex].quantity += quantity;
      setStorageProducts([...refCart]);
    }
  };

  const deleteProduct = (id) => {
    const productFilter = storageProducts.filter((p) => {
      if (p.id !== id) {
        return p;
      }
    });
    setStorageProducts(productFilter);
  };

  const deleteAllProducts = () => {
    setStorageProducts([]);
  };

  const totalPrice = storageProducts.reduce((acc, product) => {
    return Math.round((acc + product.price * product.quantity) * 100) / 100;
  }, 0);

  const badgeCounter = () => {
    let refCount = 0;

    storageProducts.forEach((elem) => {
      refCount += elem.quantity;
    });

    setbadgeCount(refCount);
  };

  return {
    badgeCount,
    storageProducts,
    addProduct,
    deleteAllProducts,
    deleteProduct,
    totalPrice,
  };
};