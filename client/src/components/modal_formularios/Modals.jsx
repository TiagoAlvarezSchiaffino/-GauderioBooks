import React, { useContext } from "react";
import Modal from "./Modal";
import Formulario_LogIn from "./Formulario_LogIn";
import { context } from "../../context";
import Formulario_SignIn from "./Formulario_SignIn";

const Modals = () => {
  const { isOpen, openModal, closeModal, isLogin } = useContext(context);

  return (
    <div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {isLogin ? <Formulario_LogIn /> : <Formulario_SignIn />}
      </Modal>
    </div>
  );
};

export default Modals;
