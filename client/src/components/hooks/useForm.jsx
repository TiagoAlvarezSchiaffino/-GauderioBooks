import { useRef, useState } from "react";

export const useForm = (initialForm) => {

    const formIsOkRef = useRef(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({
    userNameError: false,
    fullNameError: false,
    emailError: false,
    passwordError: false,
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  

  const validationSignInOk = () =>{
    const { userNameError, fullNameError, emailError, passwordError} = errors;
    if(!userNameError && !fullNameError && !emailError && !passwordError){
      formIsOkRef.current = true;
    }else{
      formIsOkRef.current = false;
    }
    return formIsOkRef;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });    
  };
  const validateForm = (nameError, valueError)=>{
    setErrors({
      ...errors,
      [nameError]: valueError,
    });  
  };

  const handleKeyUpUser = () => {
    let regExpUser = /^[a-zA-Z0-9_-]+$/;  
    if(!regExpUser.test(form.userName.trim())){
     validateForm('userNameError', true);   
    }else{
      validateForm('userNameError', false);
    }
    return errors;
  };
  const handleKeyUpFullName = () => {
    let regExpFullName = /^[a-zA-Z\u00C0-\u00FF\s]+$/;
    if(!regExpFullName.test(form.fullName.trim())){
      validateForm('fullNameError', true);
     }else{
       validateForm('fullNameError', false);
     }
    return errors;
  };

  const handleOnBlurEmail = () => {
    let regExpEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if(!regExpEmail.test(form.email.trim())){
       validateForm('emailError', true);
     } else{
             validateForm('emailError', false);
     }
    return errors;
  }; 
  const handleOnFocusEmail = () => {
    validateForm('emailError', false);     
    return errors;
  }; 

  const handleOnBlurPassword = () => {
    let regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!regExpPassword.test(form.password.trim())){
       validateForm('passwordError', true);
     } else{
             validateForm('passwordError', false);
     }
    return errors;
  }; 
  const handleOnFocusPassword = () => {
    validateForm('passwordError', false);     
    return errors;
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSignInOk();
    fetch('https://gauderiolibros.vercel.app/user7create')
      .then((res) => res.json())
      .then((data) => setBooks(data.allBooks));
    console.log(formIsOkRef);
  };

  return {
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
  };
};