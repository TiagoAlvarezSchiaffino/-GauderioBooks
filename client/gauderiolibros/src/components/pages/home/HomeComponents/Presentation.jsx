import { Link } from "react-router-dom";
import sCarrousel from "./sCarrousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Presentation = () => {
  return (
    <div className="w-full my-8">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 bg-[#690202] p-8 rounded-2xl gap-8 flex flex-col md:flex-row">
          <div className="text-white">
            <h1 className="mb-3 text-3xl font-bold uppercase ">
              ¡Bienvenidos a Gauderio Libros!
            </h1>
            <p className="text-lg font-light">
              Encuentra la lectura ideal para tus gustos literarios, ya sea una
              aventura emocionante, conocimiento enriquecedor o entretenimiento,
              en nuestro amplio catálogo.
            </p>
            <p className="text-lg font-light  ">
              ¡Disfruta de la lectura y descubre nuevas experiencias!
            </p>
          </div>
          <img
            src={}
            alt=" "
            className="self-center w-60 h-60 hover:scale-105 duration-500 hover:drop-shadow-2xl hover:shadow-black"
          />
        </div>
        <div className="bg-[#e6ddbc] text-black rounded-2xl p-8 ">
          <h2 className="mb-3 text-3xl font-bold uppercase">
            La mejor opción para regalar
          </h2>
          <p className="text-lg font-light ">
            Cuando no sabes exactamente que regalar.
          </p>
          <p className="text-lg font-light ">
            Miles de libros, regala de manera fácil y rápida a quién más
            quieras.
          </p>
        </div>
        <Link
          to={"s/?genre=Inglés"}
          className=" bg-[#262525] rounded-2xl p-8 text-white hover:bg-[#690202] transition-all group"
        >
          <h2 className="mb-3 text-3xl font-bold uppercase group-hover:underline">
            ¡Libros en inglés!
          </h2>
          <p className="text-lg font-light ">
            Descubre nuevos libros en inglés, conocimientos y experiencias
            únicas.
          </p>
          <p className="text-lg font-light ">
            ¡Ven y enamórate de un nuevo idioma!
          </p>
        </Link>
        <div className="xl:col-span-2 bg-[#262525] rounded-2xl p-8 flex flex-col md:flex-row gap-8">
          <img
            src={}
            alt=""
            className="self-center w-60 h-60 hover:scale-105 duration-500 hover:drop-shadow-2xl hover:shadow-black"
          />
          <div className="text-white">
            <h2 className="mb-3 text-3xl font-bold uppercase">Comprá Online</h2>
            <p className="text-lg font-light ">
              Comprar libros en línea en nuestra tienda, con envío gratis y
              seguro.
            </p>
            <p className="text-lg font-light ">
              Compra en cualquier momento y recibe tu libro en menos de 24
              horas.
            </p>
          </div>
        </div>
      </div>
      <sCarrousel />

      <h2 className="text-3xl text-[#822626] mb-8">Compra por categoría</h2>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <Link
          to={"s/?genre=Narrativa"}
          className="bg-[#822626] rounded p-8 text-white inline-flex items-center justify-center gap-8 group animationBotton before:rounded before:bg-[#7750a7fe] relative z-0 before:absolute before:-z-10 before:inset-0 before:content-[' ']  before:origin-bottom-right hover:before:origin-bottom-left "
        >
          <h2 className="text-lg font-bold uppercase transition-all md:text-3xl group-hover:underline ">
            Narrativa
          </h2>
          <FontAwesomeIcon
            className="h-5 transition-all md:h-8 group-hover:translate-x-1"
            icon={faArrowRight}
          />
        </Link>
        <Link
          to={"s/?genre=Inglés"}
          className=" bg-[#822626] rounded p-8 text-white inline-flex items-center justify-center gap-8 group animationBotton before:rounded before:bg-[#50a79dfe] relative z-0 before:absolute before:-z-10 before:inset-0 before:content-[' ']  before:origin-bottom-right hover:before:origin-bottom-left "
        >
          <h2 className="text-lg font-bold uppercase transition-all md:text-3xl group-hover:underline">
            Inglés
          </h2>
          <FontAwesomeIcon
            className="h-5 transition-all md:h-8 group-hover:translate-x-1"
            icon={faArrowRight}
          />
        </Link>
        <Link
          to={"s/?genre=Programación"}
          className=" bg-[#822626] rounded p-8 text-white  inline-flex items-center justify-center gap-8 group animationBotton before:rounded before:bg-[#262525] relative z-0 before:absolute before:-z-10 before:inset-0 before:content-[' ']  before:origin-bottom-right hover:before:origin-bottom-left "
        >
          <h2 className="text-lg font-bold uppercase transition-all md:text-3xl group-hover:underline">
            Programación
          </h2>
          <FontAwesomeIcon
            className="h-5 transition-all md:h-8 group-hover:translate-x-1"
            icon={faArrowRight}
          />
        </Link>
        <Link
          to={"s/?genre=Cocina"}
          className=" bg-[#822626] rounded p-8 text-white inline-flex items-center justify-center gap-8 group animationBotton before:rounded before:bg-[#61af63fe] relative z-0 before:absolute before:-z-10 before:inset-0 before:content-[' ']  before:origin-bottom-right hover:before:origin-bottom-left "
        >
          <h2 className="text-lg font-bold uppercase transition-all md:text-3xl group-hover:underline">
            Cocina
          </h2>
          <FontAwesomeIcon
            className="h-5 transition-all md:h-8 group-hover:translate-x-1"
            icon={faArrowRight}
          />
        </Link>
      </div>
    </div>
  );
};

export default Presentation;