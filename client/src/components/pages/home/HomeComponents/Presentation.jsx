import React from "react";

const Presentation = () => {
  return (
    <div className="bg-white max-w-7xl m-auto my-7">
      <div className="bg-black rounded-lg flex-col flex justify-center items-center px-5 sm:flex-row">
        <div className="text-white p-5 w-1/2">
          <h1 className="text-3xl text-cyan-200 p-9 pt-1"></h1>
          <p className="p-2 w-3/4 pl-8">
         </p> 
         <p className="p-2 w-3/4 pl-8">
          </p >
          <p className="p-2 w-3/4 pl-8"></p>
        </div>
        <div className="text-white p-5 w-1/2 rounded">
          <img />
        </div>
      </div>
      <div className="flex justify-between mt-10 w-full">
        <div className="w-1/2 ">
          <img />
        </div>
        <div className="w-1/2 ">
          <img />
        </div>
      </div>

      <div className="flex justify-between mt-10 w-full">
      <img
          className="rounded-lg w-[45%]"
          src={}
          alt="LibreoIngles"
        />

        <img className="rounded-lg  w-[45%]" src={Cupon} alt="LibreoIngles" />
      </div>
    </div>
  );
};

export default Presentation;
