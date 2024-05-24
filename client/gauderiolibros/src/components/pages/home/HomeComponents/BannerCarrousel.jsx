import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const BannerCarrousel = () => {
  return (
    <div className="rounded-none h-36 sm:h-64 md:h-80 lg:h-96">
      <Carousel id="carousel">
        <Link to="/books/"className="h-full">
          <img  className="w-full h-full " src={} alt="Banner Image 1" />
        </Link>
        <Link to="/books/" className="h-full">
          <img  className="w-full h-full " src={} alt="Banner Image 1" />
        </Link>
        <Link to="/books/"className="h-full">
          <img  className="w-full h-full " src={} alt="Banner Image 1" />
        </Link>
        <Link to="/books/" className="h-full">
          <img  className="w-full h-full " src={} alt="Banner Image 1" />
        </Link>
      </Carousel>
    </div>
  );
};

export default BannerCarrousel;