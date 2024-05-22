import { useEffect, useState } from "react";
import Card from "./BooksComponents/Card";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Accordion from "../../accordion/Accordion";

const Books = () => {
  const [books, setBooks] = useState();
  const [filteredBooks, setFilteredBooks] = useState();
  const [searchParams] = useSearchParams();
  const [queryFilter, setQueryFilter] = useState({
    genre: "",
    editorial: "",
    author: "",
    search: "",
  });

  const [currentPage, setCurrentPage] = useState({
    min: 0,
    max: 12,
    current: 1,
  });

  const genre = searchParams.get("genre");

  console.log(urlData)
  useEffect(() => {
    fetch("https://gauderiolibros.vercel.app/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.allBooks));
  }, []);

  useEffect(() => {
    if (genre) {
      setQueryFilter({ ...queryFilter, genre: genre });
    }
  }, []);

  useEffect(() => {
    fetch(
      `https://gauderiolibros.vercel.app/books/?genre=${queryFilter.genre}&editorial=${queryFilter.editorial}&author=${queryFilter.author}&search=${queryFilter.search}`
    )
      .then((res) => res.json())
      .then((data) => setFilteredBooks(data.filteredBooks));
  }, [filteredBooks]);

  const handleFilterClick = (e) => {
    const { name, value } = e.target;
    if(queryFilter[name]){
      const found = queryFilter[name].find((e)=> e == value)
      if (found) {
        handleFilterClickClose(name, value)
      }
      else {
        setQueryFilter({ ...queryFilter, [name]: [...queryFilter[name], value], search: "" });
      }
    }
    else {
      setQueryFilter({ ...queryFilter, [name]: [...queryFilter[name], value], search: "" });
    }

  };

  const handleFilterClickClose = (name, value) =>{
    if(queryFilter[name]){
      const found = queryFilter[name].filter((e)=>{if(e!==value){return e}})
      if(found){
        setQueryFilter({...queryFilter, [name]:found})
      }
    }
  }
    

  const handlerOnChangeSearchBar = (e) => {
    const { value } = e.target;
    setQueryFilter({ ...queryFilter, search: value });
  };

  const changePage = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name == "previous" && currentPage.current !== 1) {
      setCurrentPage({
        ...currentPage,
        min: currentPage.min - 12,
        max: currentPage.max - 12,
        current: currentPage.current - 1,
      });
    } else if (
      name == "next" &&
      currentPage.current !== Math.ceil(filteredBooks.length / 12)
    ) {
      setCurrentPage({
        ...currentPage,
        min: currentPage.min + 12,
        max: currentPage.max + 12,
        current: currentPage.current + 1,
      });
    } else if (name == "page") {
      setCurrentPage({
        ...currentPage,
        current: Number(value),
        min: 12 * value - 12,
        max: 12 * value,
      });
    }
  };

  const getAllGenre = () => {
    const genres = books?.flatMap((book) =>
      book.genre.split(",").map((genre) => genre.trim())
    );
    const allGenres = [...new Set(genres)];
    return allGenres.map((genre) =>
    queryFilter['genre']?.indexOf(genre)>=0 ? (
        <button
          className="bg-[#822626] text-white rounded p-1 "
          key={genre}
          onClick={handleFilterClick}
          name={"genre"}
          value={genre}
        >
          {genre}
        </button>
      ) : (
        <button
          className="text-gray-500 hover:shadow-gray-300 hover:bg-[#e9cccc] hover:shadow-md rounded p-1"
          key={genre}
          onClick={handleFilterClick}
          name={"genre"}
          value={genre}
        >
          {genre}
        </button>
      )
    );
  };

  const getAllEditorial = () => {
    const editorials = books?.map((book) => book.editorial);
    const allEditorials = [...new Set(editorials)];
    return allEditorials.map((editorial) =>
    queryFilter['editorial']?.indexOf(editorial)>=0 ? (
        <button
          className="bg-[#822626] text-white rounded p-1"
          key={editorial}
          onClick={handleFilterClick}
          name={"editorial"}
          value={editorial}
        >
          {editorial}
        </button>
      ) : (
        <button
          className="text-gray-500 hover:shadow-gray-300 hover:bg-[#e9cccc] hover:shadow-md rounded p-1"
          key={editorial}
          onClick={handleFilterClick}
          name={"editorial"}
          value={editorial}
        >
          {editorial}
        </button>
      )
    );
  };

  const getAllAuthor = () => {
    const Authors = books?.map((book) => book.author);
    const AllAuthor = [...new Set(Authors)];
    return AllAuthor.map((author) =>
      queryFilter['author']?.indexOf(author)>=0 ? (
        <button
          className="bg-[#822626] text-white rounded p-1"
          key={author}
          onClick={handleFilterClick}
          name={"author"}
          value={author}
        >
          {author}
        </button>
      ) : (
        <button
          className="text-gray-500 hover:shadow-gray-300 hover:bg-[#e9cccc] hover:shadow-md rounded p-1"
          key={author}
          onClick={handleFilterClick}
          name={"author"}
          value={author}
        >
          {author}
        </button>
      )
    );
  };

  return (
    <main className="w-full py-12 ">
      <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] m-auto  flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between ">
          <h1 className="text-sm md:text-xl lg:text-2xl font-semibold uppercase text-[#822626] w-2/6">
            Productos
          </h1>

          <div className="flex w-2/6">
            <input
              value={queryFilter.search}
              onChange={handlerOnChangeSearchBar}
              type="text"
              placeholder="Busqueda..."
              className="w-full text-gray-600 border-gray-400 border-solid rounded h-7 lg:h-9 border-1 text-xs sm:text-sm md:text-base"
            />
          </div>

          <p className="text-xs md:text-sm text-[#822626] w-2/6 font-semibold text-right">
            {filteredBooks ? filteredBooks?.length : 0} Artículos
          </p>
        </div>
        <hr />

        <div className="w-full flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-1">
          <aside className="w-full md:sticky md:block">
            <div className="flex flex-wrap gap-3 pb-5">
              {queryFilter.genre 
                ?queryFilter["genre"].map((x)=>{
                  return (
                    <button
                    className="bg-[#822626] px-2 py-1 text-white hover:bg-[#525252] hover:shadow-md hover:scale-105 transition-all text-sm shadow-slate-300 rounded flex gap-2 items-center"
                    name="genre"
                    >
                    
                    {x}{" "}
                    <FontAwesomeIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFilterClickClose("genre", x);
                      }}
                      icon={faCircleXmark}
                    />
                  </button>
                  )
                })
                : null}
              {queryFilter.editorial 
                ? queryFilter["editorial"].map((x)=>{
                  return (
                  <button
                    className="bg-[#822626] px-2 py-1 text-white hover:bg-[#525252] hover:shadow-md hover:scale-105 transition-all text-sm shadow-slate-300 rounded items-center"
                    name="editorial"
                  >
                  {x}{" "}
                  <FontAwesomeIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFilterClickClose("editorial", x);
                    }}
                    icon={faCircleXmark}
                    />
                </button>
                )})
               : null}
              {queryFilter.author 
              ?queryFilter.author.map((x)=>{
                return (
                  <button
                  className="bg-[#822626] px-2 py-1 text-white hover:bg-[#525252] hover:shadow-md hover:scale-105 transition-all text-sm shadow-slate-300 rounded items-center"
                  name="author"
                  >
                  {x}{" "}
                  <FontAwesomeIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFilterClickClose("author", x);
                    }}
                    icon={faCircleXmark}
                    />
                </button>
                )}) 
               : null}
            </div>
            <Accordion
              title={"Género"}
              classTitle={
                "text-lg font-semibold text-[#822626] hover:bg-gray-200 w-44 px-2 text-left"
              }
              content={books && getAllGenre()}
              classContent={
                "flex flex-col items-start gap-2 py-1 my-1 overflow-auto text-sm w-44 p-2 justify-items-start"
              }
              classAccordion={""}
            />
            <Accordion
              title={"Editorial"}
              classTitle={
                "text-lg font-semibold text-[#822626] hover:bg-gray-200 w-44 px-2 text-left"
              }
              content={books && getAllEditorial()}
              classContent={
                "flex flex-col items-start gap-2 py-1 my-1 text-sm w-44 p-2 justify-items-start"
              }
              classAccordion={""}
            />
            <Accordion
              title={"Autor"}
              classTitle={
                "text-lg font-semibold text-[#822626] hover:bg-gray-200 w-44 px-2 text-left"
              }
              content={books && getAllAuthor()}
              classContent={
                "flex flex-col items-start gap-2 py-1 my-1 overflow-auto text-sm w-44 p-2 justify-items-start text-left"
              }
              classAccordion={""}
            />
          </aside>
          <div
            className={`${
              filteredBooks?.length > 0
                ? "grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-4 mt-0 xl:grid-cols-3"
                : "flex justify-start items-start flex-col w-full h-full"
            }`}
          >
            {books?.length > 0 ? (
              filteredBooks?.length > 0 ? (
                filteredBooks?.map(({ _id, image, title, price }, index) =>
                  index >= currentPage.min && index < currentPage.max ? (
                    <Card
                      image={image}
                      title={title}
                      price={price}
                      id={_id}
                      key={_id}
                    />
                  ) : null
                )
              ) : (
                <span className="m-auto mt-72 text-[#822626] font-bold text-xl text-center">
                  Lo sentimos, el libro que busca no está disponible. Estaremos
                  trabajando para conseguirlo pronto.
                </span>
              )
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <p className="text-lg text-[#822626] font-semibold">
                  Cargando...
                </p>
                <img
                  className="h-auto p-10 w-52"
                  src={}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        {filteredBooks?.length > 12 ? (
          <div className="flex justify-center items-center w-full">
            <div className="flex justify-between items-center bg-[#e9cccc] shadow-slate-300 shadow-xl w-3/4 h-min">
              <button
                onClick={changePage}
                name="previous"
                className="border-solid border-2 border-[#e9cccc] hover:border-[#822626] active:bg-[#822626] active:text-white h-10 w-10"
              >
                {"<"}
              </button>
              {filteredBooks?.map((x, index) => {
                if (index % 12 == 0) {
                  if (index / 12 + 1 == currentPage.current) {
                    return (
                      <button
                        className="bg-[#822626] text-white h-10 w-10"
                        onClick={changePage}
                        key={index}
                        value={index / 12 + 1}
                        name="page"
                      >
                        {index / 12 + 1}
                      </button>
                    );
                  } else
                    return (
                      <button
                        className="border-solid border-2 border-[#e9cccc] hover:border-[#822626] h-10 w-10"
                        onClick={changePage}
                        key={index}
                        value={index / 12 + 1}
                        name="page"
                      >
                        {index / 12 + 1}
                      </button>
                    );
                }
              })}
              <button
                onClick={changePage}
                name="next"
                className="border-solid border-2 border-[#e9cccc] hover:border-[#822626] active:bg-[#822626] active:text-white h-10 w-10"
              >
                {">"}
              </button>
            </div>
            </div>
        ) : null}
      </div>
    </main>
  );
};

export default Books;