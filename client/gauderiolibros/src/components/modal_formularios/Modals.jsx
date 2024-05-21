import React, { useContext } from "react";
import Modal from "./Modal";
import FormLogin from "./FormLogin";
import { context } from "../../context";
import FormSignIn from "./FormSignIn";

const Modals = () => {
  const { isOpen, openModal, closeModal, isLogin } = useContext(context);

  return (
    <div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {isLogin ? <FormLogin /> : <FormSignIn />}
      </Modal>
    </div>
  );
};

export default Modals;
