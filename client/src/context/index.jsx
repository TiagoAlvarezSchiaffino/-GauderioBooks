import { createContext, useState } from "react";
import { useForm } from "../components/hooks/useForm";
import { useCart } from "../components/hooks/useCart";

export const context = createContext();

const initialForm = {
  username: "",
  fullname: "",
  email: "",
  password: "",
};

const ContextProvider = ({ children }) => {
  const { products,
    addProduct,
    deleteAllProducts,
    deleteProduct,totalPrice } = useCart();
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
    response,
    handleChange,
    handleKeyUpUser,
    handleKeyUpFullName,
    handleOnFocusEmail,
    handleOnBlurEmail,
    handleOnBlurPassword,
    handleOnFocusPassword,
    handleSubmit,
  } = useForm(initialForm);

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
        response,
        handleChange,
        handleKeyUpUser,
        handleKeyUpFullName,
        handleOnFocusEmail,
        handleOnBlurEmail,
        handleOnBlurPassword,
        handleOnFocusPassword,
        handleSubmit,
        products,
    addProduct,
    deleteAllProducts,
    deleteProduct,
    totalPrice,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;