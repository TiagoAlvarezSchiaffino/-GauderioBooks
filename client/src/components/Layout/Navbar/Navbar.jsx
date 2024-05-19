import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.jpeg";
import Modals from "../../modal_formularios/Modals";
import { context } from "../../../context";

const Navbar = () => {
  const { openModal, loginOk, form, closeModal } = useContext(context);

  loginOk && closeModal;

  return (
    <>
      <nav className="sticky top-0 flex bg-black text-white h-24 items-center justify-between z-40 w-full">
        <a className="p-5" href="/">
          <img className="h-20 w-44" src={Logo} alt="logo" />
        </a>
        <ul className="flex items-center justify-end text-sm sm:mr-10">
          <li className="uppercase sm:p-3 p-1">
            <Link to="/">inicio</Link>
          </li>
          <li className="uppercase sm:p-4 p-1">
            <Link to="/books">catalogo</Link>
          </li>
          <li className="uppercase sm:p-4 p-1">
            <Link to="/faq">compras online</Link>
          </li>
          <li className="sm:p-5 p-1 cursor-pointer flex items-center flex-col" onClick={openModal}>
            {/*-----login------------------------------*/}
            <FontAwesomeIcon
              className={loginOk ? "h-5 text-teal-400 " : "text-white h-5"}
              icon={faUser}
            />
            {loginOk ? <h6 className="h-3 text-teal-400 text-xs">{form.username}</h6> : <></>}
          </li>
          <li className=" sm:p-4 p-1">
            {" "}
            {/*----------CARRITO DE COMPRA-----------------------*/}
            <Link to="/cart">
              <FontAwesomeIcon className="h-5" icon={faCartShopping} />
            </Link>
          </li>
        </ul>
      </nav>
      <Modals />
    </>
  );
};

export default Navbar;
