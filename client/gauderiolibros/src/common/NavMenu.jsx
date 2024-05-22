import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [toggleOpen, setToggleOpen] = useState(false);

  useEffect(() => {
    console.log(toggleOpen);
  }, [toggleOpen]);

  return (
    <>
      <div className="md:hidden w-1/3">
        <summary className="list-none p-5">
          <FontAwesomeIcon
            onClick={() => setToggleOpen((prevOpen) => !prevOpen)}
            icon={faBars}
            className="text-[#822626] bg-white rounded-sm p-1 hover:bg-[#262525] hover:text-white hover:rounded-sm"
            size="2xl"
          />
        </summary>

        <div
          className={`flex flex-col items-center absolute bg-[#822626] rounded-b mt-2 w-full ease-in-out transition-all duration-500 ${
            toggleOpen ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
        >
          <span className="uppercase sm:p-3 md:p-3 lg:px-6 p-1 hover:text-[#262525]">
            <Link to="/">Inicio</Link>
          </span>

          <span className="uppercase sm:p-3 md:p-3 lg:px-5 p-1 hover:text-[#262525]">
            <Link to="/books">Catálogo</Link>
          </span>

          <span className="uppercase sm:p-3 md:p-3 lg:px-5 p-1 hover:text-[#262525]">
            <Link to="/faq">FAQ</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavMenu;