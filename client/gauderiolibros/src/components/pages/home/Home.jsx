import { useContext, useEffect } from "react";
import BannerCarrousel from "./HomeComponents/BannerCarrousel";
import Presentation from "./HomeComponents/Presentation";
import { context } from "../../../context";

const Home = () => {
  const { getDataUser, userData } = useContext(context)
  useEffect(() => {
    getDataUser(JSON.parse(localStorage.getItem('userData')).data)
  }, [])

  return (
    <main className="w-full">
      <BannerCarrousel />
      <div className="m-auto w-[90%] sm:w-[80%] md:w-[75%] lg:w-[65%]">
        <div>
          <Presentation />
        </div>
      </div>
    </main>
  );
};
export default Home;