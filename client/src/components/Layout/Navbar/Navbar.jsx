import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping , faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex bg-black text-white h-24 items-center justify-between">

        <a className='p-5' href="/">
            <img 
                className='h-20 w-44'
                src="src/assets/Logo.jpeg" 
                alt="logo" 
            />
        </a>
        <ul className="flex items-center justify-end">
          <li className="uppercase p-3"><Link to='/'>inicio</Link></li>
          <li className="uppercase p-4"><Link to='/books'>catalogo</Link></li>
          <li className="uppercase p-4"><Link to='/faq'>compras online</Link></li>
          <li className="p-5"><Link to='/user'><FontAwesomeIcon className="h-5" icon={faUser} /></Link></li>    {/*-----login----*/}
          <li className=" p-9"><Link to='/cart'><FontAwesomeIcon className="h-5" icon={faCartShopping} /></Link></li>  {/*-----CARRITO DE COMPRA----*/}
        </ul>
      </nav>
  )
}

export default Navbar;