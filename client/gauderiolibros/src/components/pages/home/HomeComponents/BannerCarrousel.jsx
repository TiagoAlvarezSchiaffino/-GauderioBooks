import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";

const BannerCarrousel = () => {
  return (
    <div className="h-36 sm:h-64 md:h-80 lg:h-96 rounded-none">
      <Carousel id="carousel">
        <Link to="/books/"className="h-full">
          <img  className=" h-full w-full" src={image1} alt="Banner Image 1" />
        </Link>
        <Link to="/books/" className="h-full">
          <img  className=" h-full w-full" src={image2} alt="Banner Image 2" />
        </Link>
        <Link to="/books/"className="h-full">
          <img  className=" h-full w-full" src={image3} alt="Banner Image 3" />
        </Link>
        <Link to="/books/" className="h-full">
          <img  className=" h-full w-full" src={image4} alt="Banner Image 4" />
        </Link>
      </Carousel>
    </div>
  );
};

export default BannerCarrousel;