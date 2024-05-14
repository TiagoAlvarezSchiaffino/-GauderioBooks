import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex bg-black text-white h-20 items-center justify-between">
        <h1 className=" text-3xl font-bold uppercase p-5">Gauderio Libros</h1>
        <ul className="flex items-center justify-end">
          <li className="uppercase p-3">inicio</li>
          <li className="uppercase p-3">catalogo</li>
          <li className="uppercase p-3">compras online</li>
          <li className="uppercase p-3">login</li>
          <li className="uppercase p-3">Cartwidget</li>
        </ul>
      </nav>
  )
}

export default Navbar;
