import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo.jpeg";
import Modals from "../../modal_formularios/Modals";
import { context } from "../../../context";
import ButtonUser from "./navbarComponents/ButtonUser";

const Navbar = () => {
  const {products, openModal, loginOk, form } = useContext(context);

  return (
    <header className="sticky top-0 z-10 w-full  bg-[#822626]">
      <nav className="flex items-center justify-between w-3/5 h-24 m-auto text-white">
        <a className="flex items-center" href="/">
          <span className="font-roboto-serif lg:text-2xl">Gauderio</span>
          <img className="w-24 h-auto" src={Logo} alt="logo" />
          <span className="font-roboto-serif lg:text-2xl">Libros</span>
        </a>

        <ul className="flex items-center justify-end text-sm lg:text-base">
          <li className="uppercase sm:p-3 p-1 hover:text-[#262525]">
            <Link to="/">Inicio</Link>
          </li>

          <li className="uppercase sm:p-3 p-1 hover:text-[#262525]">
            <Link to="/books">Catálogo</Link>
          </li>

          <li className="uppercase sm:p-3 p-1 hover:text-[#262525]">
            <Link to="/faq">FAQ</Link>
          </li>
          {loginOk?(<ButtonUser/>):
          (<li
            className="flex flex-col items-center p-1 cursor-pointer sm:p-5"
            onClick={openModal}
          >
            
            <FontAwesomeIcon
              className={"text-white h-5 hover:text-[#262525]"}
              icon={faUser}
            />
          </li>)}
          <li className="relative inline-flex p-2">
         
            <Link to="/cart">
              <FontAwesomeIcon
                className=" h-5 hover:text-[#262525]"
                icon={faCartShopping}
              />
              {products.length > 0 && <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">{products.length}</div>}
            </Link>
          </li>
        </ul>
      </nav>
      <Modals />
    </header>
  );
};

export default Navbar;