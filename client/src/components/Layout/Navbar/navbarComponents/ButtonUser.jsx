import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { context } from "../../../../context";

const ButtonUser = () => {
  const { loginOk, form, handleCloseSesion } = useContext(context);

  const user = localStorage.getItem("userData"); //
  const userdata = JSON.parse(user); //

  return (
    <>
      <li className=" p-0 cursor-pointer ">
        <Accordion collapseAll className="border-0 ">
          <AccordionPanel className="border-0 " >
            <AccordionTitle className="bg-[#822626]  p-1 rounded flex  flex-col hover:bg-[#8f3232]  hover:border-collapse focus:collapse">
              <FontAwesomeIcon
                className="h-5 px-5 text-[#E6DDBC]"
                icon={faUser}
              />
              <div className="h-1 text-[#E6DDBC] text-xs">
                {userdata.data.user.username}
              </div>
            </AccordionTitle>
            <AccordionContent className="p-1 hover:bg-[#8f3232] rounded border-1 border-red-800" >
              <div
                className="text-[##E6DDBC] text-xs text-center"
                onClick={handleCloseSesion}
              >
                SALIR
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </li>
    </>
  );
};

export default ButtonUser;