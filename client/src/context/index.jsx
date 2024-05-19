import { createContext, useState } from "react";
import { useForm } from "../components/hooks/useForm";

export const context = createContext();

//------------Validacion del form---------------------------------------------------
const initialForm = {
  username: "",
  fullname: "",
  email: "",
  password: "",
};
//----------------------------------------------------------------------------------------------

const ContextProvider = ({ children }) => {
  //---------estados y funciones del modal de Registro-------------------------------------------
  const [isOpen, setIsOpen] = useState(true); //
  const openModal = () => setIsOpen(false); //
  const closeModal = () => setIsOpen(true); //

  //------------Validacion del form--------------------------------------------------
  const {
    form,
    errors,
    isLogin,
    setIsLogin,
    loginOk,
    setLoginOk,
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

  //----------------------------------------------------------------------------------------------

  return (
    <context.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        setIsLogin,
        isLogin,
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
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;