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
  const validationsForm = (form) => {
    let errors = {};
    let regExpUsuario = /^[a-zA-Z0-9_-]+$/;
    var regExpFullName = /^[a-zA-Z\u00C0-\u00FF\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  
    if(!regExpUsuario.test(form.userName.trim())){
      errors.userName = 'No usar espacios ni caracteres especiales solo se acepta letras, numeros y guiones.'
    }
    if(!regExpFullName.test(form.fullName.trim())){
      errors.fullName = 'No usar numeros ni caracteres especiales solo se acepta letras y espacios.'
    }
    if(!regexEmail.test(form.email.trim())){
      errors.email = 'No usarolo se acepta letras y espacios.'
    }
    return errors;
  };
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
      errors,
      loading,
      response,
      handleChange,
      handleKeyUp,
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
          errors,
          loading,
          response,
          handleChange,
          handleKeyUp,
          handleSubmit,
        }}
      >
        {children}
      </context.Provider>
    );
};

export default ContextProvider;