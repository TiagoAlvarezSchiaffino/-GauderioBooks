import { useRef, useState } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

const initialForm = {
    username: "",
    fullname: "",
    email: "",
    password: "",
  };

export const useForm = () => {


  const [isLogin, setIsLogin] = useState(false);
  const formIsOkRef = useRef(false);
  const [form, setForm] = useState(initialForm);//
  const [errors, setErrors] = useState({
    userNameError: false,
    fullNameError: false,
    emailError: false,
    passwordError: false,
  });
  const [loginOk, setLoginOk] = useLocalStorage("loginOk", false);
  const [userData, setUserData] = useLocalStorage("userData", {});

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); //
  const openModal = () => setIsOpen(true); //
  const closeModal = () => setIsOpen(false); //

  const handleCloseSesion = () => {
    setLoginOk(false);
    setUserData({});
    return loginOk;
  };
  const handleOpenSesion = () => {
    setLoginOk(true);
    return loginOk;
  };

  const validationSignInOk = () => {    
    const { username, fullname, email, password} = form;
    const { userNameError, fullNameError, emailError, passwordError } = errors;
    
    if(isLogin){
      email===''&& validateForm("emailError", true);
      password==='' && validateForm("emailError", true);
      if ( !emailError && !passwordError ) {
        formIsOkRef.current = true;
      } else {
        formIsOkRef.current = false;
      }
    }else{
        username ==='' && validateForm("userNameError", true);
         fullname==='' && validateForm("fullNameError", true);
         email===''&& validateForm("emailError", true);
         password==='' && validateForm("passwordError", true);
        if (!userNameError && !fullNameError && !emailError && !passwordError) {
        formIsOkRef.current = true;
        console.log('formOk', username, fullname, email, password,'error:', userNameError, fullNameError, emailError, passwordError)
      } else {
        console.log('form no ok', username, fullname, email, password,'error:', userNameError, fullNameError, emailError, passwordError)
        formIsOkRef.current = false;
      }
    }    
    return formIsOkRef;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const validateForm = (nameError, valueError) => {
    setErrors({
      ...errors,
      [nameError]: valueError,
    });
  };

  const handleKeyUpUser = () => {
    let regExpUser = /^[a-zA-Z0-9_\-]+$/;
    if (!regExpUser.test(form.username.trim())) {
      validateForm("userNameError", true);
    } else {
      validateForm("userNameError", false);
    }
    return errors;
  };

  const handleKeyUpFullName = () => {
    let regExpFullName = /^[a-zA-Z\u00C0-\u00FF\s]+$/;
    if (!regExpFullName.test(form.fullname.trim())) {
      validateForm("fullNameError", true);
    } else {
      validateForm("fullNameError", false);
    }
    return errors;
  };

  const handleOnBlurEmail = () => {
    let regExpEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if (!regExpEmail.test(form.email.trim())) {
      validateForm("emailError", true);
    } else {
      validateForm("emailError", false);
    }
    return errors;
  };

  const handleOnFocusEmail = () => {
    validateForm("emailError", false);
    return errors;
  };

  const handleOnBlurPassword = () => {
    let regExpPassword = /^\d{4,8}$/;
    if (!regExpPassword.test(form.password.trim())) {
      validateForm("passwordError", true);
    } else {
      validateForm("passwordError", false);
    }
    return errors;
  };

  const handleOnFocusPassword = () => {
    validateForm("passwordError", false);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSignInOk();
    if (formIsOkRef.current) {
      axios
        .post(
          isLogin
            ? "https://gauderiolibros.vercel.app/users/login"
            : "https://gauderiolibros.vercel.app/users/create",
          form
        )
        .then((res) => {
          setUserData(res);
          handleOpenSesion();
          setForm(initialForm);
          closeModal();
        })
        .catch((er) => {
          console.log(er);
          alert("Error en el registro, por favor vuelve a intentarlo");
          setForm(initialForm);
          handleCloseSesion();
        });
    }
  };

  return {
    isOpen,
    openModal,
    closeModal,
    form,
    errors,
    loginOk,
    setLoginOk,
    isLogin,
    setIsLogin,
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
  };
};