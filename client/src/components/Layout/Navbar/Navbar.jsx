import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.jpeg";
import Modals from "../../modal_formularios/Modals";
import { context } from "../../../context";

const Navbar = () => {
  const {  openModal } = useContext(context)

  return (
    <>
    <nav className="sticky top-0 flex bg-black text-white h-24 items-center justify-between z-40">
      <a className="p-5" href="/">
        <img className="h-20 w-44" src={Logo} alt="logo" />
      </a>
      <ul className="flex items-center justify-end">
        <li className="uppercase p-3">
          <Link to="/">inicio</Link>
        </li>
        <li className="uppercase p-4">
          <Link to="/books">catalogo</Link>
        </li>
        <li className="uppercase p-4">
          <Link to="/faq">compras online</Link>
        </li>
        <li className="p-5 cursor-pointer" onClick={openModal}>{/*-----login------------------------------*/}          
            <FontAwesomeIcon className="h-5" icon={faUser} />          
        </li>        
        <li className=" p-9"> {/*----------CARRITO DE COMPRA-----------------------*/}
          <Link to="/cart">
            <FontAwesomeIcon className="h-5" icon={faCartShopping} />
          </Link>
        </li>   
      </ul>

    </nav>
    <Modals/>
    </>
  );
};

export default Navbar;
