import React, { useContext } from "react";
import Presentation from "./home/Presentation";
import Carrousel from "../ui/Carrousel";

const Home = () => {
  
  return (
    <div>
      <div className="h-[500px] text-4xl text-center font-bold">
        <Carrousel />
        <Presentation />
      </div>
    </div>
  )
}

export default Home;