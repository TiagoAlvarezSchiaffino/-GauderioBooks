import React, { useContext } from "react";
import { context } from "../../context";

const Home = () => {
const data = useContext(context)
console.log(data)
  
  return (
    <div>
      <div className="h-96 text-4xl text-center font-bold p-12">Home1 {data.nombre}</div>
      <div className="h-96 text-4xl text-center font-bold p-12">Home2</div>
    </div>
  )
}

export default Home;