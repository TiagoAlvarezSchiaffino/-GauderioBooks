import React from "react";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article
      className={`bg-black/75 fixed z-40 top-0 left-0 w-full min-h-screen flex justify-center items-center  ${
        isOpen && "hidden"
      }`}
      onClick={closeModal}
    >
      <div  //modal container
        className="relative bg-white rounded text-black w-96 overflow-y-auto border-3 border-slate-700 p-3"
        onClick={handleModalContainerClick}
      >
        <button onClick={closeModal} className="absolute top-1 right-2 p-1 border-2 rounded px-3">
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
