import { createContext, useState } from "react";
import { useForm } from "../components/hooks/useForm";
import { useCart } from "../components/hooks/useCart";

export const context = createContext();



const ContextProvider = ({ children }) => {
  const {
    storageProducts,
    addProduct,
    deleteAllProducts,
    deleteProduct,
    totalPrice,
    badgeCount,
  } = useCart();
  const {
    form,
    errors,
    isLogin,
    isOpen,
    openModal,
    closeModal,
    setIsLogin,
    loginOk,
    setLoginOk,
    handleCloseSesion,
    loading,

    handleChange,
    handleKeyUpUser,
    handleKeyUpFullName,
    handleOnFocusEmail,
    handleOnBlurEmail,
    handleOnBlurPassword,
    handleOnFocusPassword,
    handleSubmit,
  } = useForm();

  return (
    <context.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        handleCloseSesion,
        isLogin,
        setIsLogin,
        loginOk,
        setLoginOk,
        form,
        errors,
        loading,
        handleChange,
        handleKeyUpUser,
        handleKeyUpFullName,
        handleOnFocusEmail,
        handleOnBlurEmail,
        handleOnBlurPassword,
        handleOnFocusPassword,
        handleSubmit,
        storageProducts,
        addProduct,
        deleteAllProducts,
        deleteProduct,
        totalPrice,
        badgeCount,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;