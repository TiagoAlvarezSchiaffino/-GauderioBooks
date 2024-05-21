import BooksCarrousel from "./BooksCarrousel";
const Presentation = () => {
  return (
    <div className="w-full md:my-7">
      <div className="flex flex-col items-center justify-center p-1 md:px-5 rounded-lg md:flex-row  ">
        <div className="md:w-1/2 p-2  lg:p-2 text-[#1c1c1c]">
          <h1 className="pt-1 text-2xl text-center lg:text-right font-semibold lg:text-3xl text-[#822626] ">
            En Gauderio Libros...
          </h1>
          <p className="md:w-3/4 lg:w-full p-2 md:pl-8 lg:p-2 text-base font-semibold lg:text-right lg:text-lg lg:leading-10">
          Encuentra la lectura ideal para tus gustos literarios, ya sea una aventura emocionante, conocimiento enriquecedor o entretenimiento, en nuestro amplio catálogo.</p>
        </div>
        <div className="text-white md:p-5 w-[90%] rounded-lg md:w-[60%]">
          <img
            className="object-cover w-full rounded-lg h-80"
            src={}
            alt=""
          />
        </div>
      </div>
      <BooksCarrousel/>
      <div className="flex flex-col md:justify-between w-[95%]  mt-10 md:flex-row mx-auto">
        <img
          className="rounded-lg m-1 mx-auto sm:w-[80%]  sm:my-2 md:w-[45%]"
          src={}
          alt=""
        />

        <img className="rounded-lg m-1 mx-auto sm:w-[80%] sm:my-2 items-end md:w-[45%]" src={} alt="" />
      </div>
    </div>
  );
};

export default Presentation;