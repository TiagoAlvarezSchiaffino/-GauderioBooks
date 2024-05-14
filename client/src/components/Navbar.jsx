import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping , faUser} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="flex bg-black text-white h-20 items-center justify-between">
        <h1 className=" text-3xl font-bold uppercase p-5">Gauderio Libros</h1>
        <ul className="flex items-center justify-end">
          <li className="uppercase p-3">inicio</li>
          <li className="uppercase p-4">catalogo</li>
          <li className="uppercase p-4">compras online</li>
          <li className="u p-5"><FontAwesomeIcon icon={faUser} /></li>    {/*-----login----*/}
          <li className=" p-9"><FontAwesomeIcon icon={faCartShopping} /></li>  {/*-----CARRITO DE COMPRA----*/}
        </ul>
      </nav>
  )
}

export default Navbar;
