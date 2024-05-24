import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Card from "../../Books/BooksComponents/Card";

export default function BooksCarrousel() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://gauderiolibros.vercel.app/books")
      .then((res) => res.json())
      .then((data) => setNews(data.allBooks.slice(-10)));
  }, []);

  return (
    <div className="my-12">
    <h2 className="text-3xl text-[#822626]">Novedades</h2>
        <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      initialSlide={4}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="relative p-2"
    >
      {news.map(({ _id, image, title, price }) => (
        <SwiperSlide className="w-[250px] mx-2" key={_id}>
          <Card
            image={image}
            title={title}
            price={price}
            id={_id}
            info={true}
          />
        </SwiperSlide>
      ))}

      <div>
        <div className="absolute text-black drop-shadow-sm swiper-button-prev"></div>
        <div className="absolute text-black drop-shadow-sm swiper-button-next"></div>
        <div className="swiper-pagination text-[#e6ddbc]"></div>
      </div>
    </Swiper>
    </div>
  );
}