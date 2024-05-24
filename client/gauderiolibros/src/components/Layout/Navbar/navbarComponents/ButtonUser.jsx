import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { context } from "../../../../context";
import Accordion from "../../../accordion/Accordion";

const ButtonUser = () => {
  const { handleCloseSesion } = useContext(context);
  const user = localStorage.getItem("userData"); //
  const userdata = JSON.parse(user); //
  const handleAdmin = () => {
    window.location.href = "/adminDashboard";
  }

  return (
    <>
      <li>
        <Accordion
          title={
            <div className="group">
              <FontAwesomeIcon
                className="h-5 text-[#ffffff] group-hover:text-black"
                icon={faUser}
              />
              <div className="h-1 text-[#ffffff] text-xs group-hover:text-black">
                {userdata.data.user.username}
              </div>
            </div>
          }
          content={
            <>
              {
                userdata.data.user.role === "admin" &&
                <div className="text-[##E6DDBC] text-xs text-center overflow-hidden hover:text-[#000000] p-2 "
                  onClick={handleAdmin}>
                  Admin
                </div>
              }
              <div
                className="text-[##E6DDBC] text-xs text-center overflow-hidden hover:text-[#000000] p-2 "
                onClick={handleCloseSesion}
              >
                Salir
              </div>
            </>
          }
          classTitle={
            "bg-[#822626] h-14 p-2 w-full rounded flex items-center justify-center flex-col"
          }
          classContent={
            " border-red-800 rounded duration-300 absolute w-full bg-[#822626] mt-3"
          }
          classAccordion={"relative w-16"}
        />
      </li>
    </>
  );
};

export default ButtonUser;