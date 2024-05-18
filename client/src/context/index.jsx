import { createContext, useState } from "react";
import { useForm } from "../components/hooks/useForm";

export const context = createContext();

//------------Validacion del form---------------------------------------------------
const initialForm = {
    userName: "",
    fullName: "",
    email: "",
    password: "",
  };
  const validationsForm = (form) => {};
  //----------------------------------------------------------------------------------------------
  
  
  const ContextProvider = ({ children }) => {
  
  
  
  
    //---------estados y funciones del modal de Registro-------------------------------------------
    const [isOpen, setIsOpen] = useState(true); //
    const openModal = () => setIsOpen(false); //
    const closeModal = () => setIsOpen(true); //
    const [isLogin, setIsLogin] = useState(false); //
    //------------Validacion del form---------------------------------------------------
  
    const {
      form,
      error,
      loading,
      response,
      handleChange,
      handleBlur,
      handleSubmit,
    } = useForm(initialForm, validationsForm);
  
    //----------------------------------------------------------------------------------------------
  
  
    return (
      <context.Provider
        value={{
          isOpen,
          openModal,
          closeModal,
          setIsLogin,
          isLogin,
          form,
          error,
          loading,
          response,
          handleChange,
          handleBlur,
          handleSubmit,
        }}
      >
        {children}
      </context.Provider>
    );
};

export default ContextProvider;