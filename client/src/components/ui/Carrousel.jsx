import React from "react";
import { Carousel } from "flowbite-react";

const Carrousel = () => {
  return (
    <div className="h-72 sm:h-64 xl:h-80 2xl:h-full">
      <Carousel>
        <img className="h-full" src={} alt="Banner Image 1" />
        <img className="h-full" src={} alt="Banner Image 2" />
        <img className="h-full" src={} alt="Banner Image 3" />
        <img className="h-full" src={} alt="Banner Image 4" />
      </Carousel>
    </div>
  );
};

export default Carrousel;