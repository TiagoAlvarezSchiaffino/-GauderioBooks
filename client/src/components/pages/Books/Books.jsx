import { useEffect, useState } from "react";
import Card from "./BooksComponents/Card";

const Books = () => {
  const [books, setBooks] = useState();
  const [filteredBooks, setFilteredBooks] = useState();
  const [queryFilter, setQueryFilter] = useState({
    genre: "",
    editorial: "",
    author: "",
    search: "",
  });

  let urlData = `https://gauderiolibros.vercel.app/books/?genre=${queryFilter.genre}&editorial=${queryFilter.editorial}&author=${queryFilter.author}&search=${queryFilter.search}`;
  useEffect(() => {
    fetch(urlData)
      .then((res) => res.json())
      .then((data) => setFilteredBooks(data.filteredBooks));
  }, [urlData]);

  useEffect(() => {
    fetch("https://gauderiolibros.vercel.app/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.allBooks));
  }, []);

  const handleFilterClick = (e) => {
    const { name, value } = e.target;
    if(queryFilter[name]==value){
      setQueryFilter({ ...queryFilter, [name]: "", search:"" });
    }else{
      setQueryFilter({ ...queryFilter, [name]: value, search:"" });

    }
  };
  const handlerOnChangeSearchBar = (e) => {
    const {value} = e.target
    setQueryFilter({...queryFilter, search:value} )
  }


  const getAllGenre = () => {
    const genres = books?.flatMap((book) =>
      book.genre.split(",").map((genre) => genre.trim())
    );
    const allGenres = [...new Set(genres)];
    return allGenres.map((genre) =>
      genre == queryFilter.genre ? (
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
          className="text-gray-500 hover:shadow-gray-300  hover:shadow-md rounded p-1"
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
      editorial == queryFilter.editorial ? (
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
          className="text-gray-500 hover:shadow-gray-300  hover:shadow-md rounded p-1"
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
      author == queryFilter.author ? (
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
          className="text-gray-500 hover:shadow-gray-300  hover:shadow-md rounded p-1"
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
    <main className=" w-full py-12">
      <div className="lg:w-3/5 lg:m-auto mx-12 flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-semibold uppercase text-[#822626] w-3/6">
            Productos
          </h1>
          <p className="text-sm text-[#822626] w-1/6 font-semibold">
            {filteredBooks ? filteredBooks?.length : 0} artículos
          </p>
          <div className="flex w-2/6">

            <input value={queryFilter.search} onChange={handlerOnChangeSearchBar} type="text" placeholder="Búsqueda..." className="w-full border-solid border-1 border-gray-400 text-gray-600 rounded" />

          </div>
        </div>
        <hr />

        <div className="w-full flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-1">
          <aside className="w-full md:sticky md:block">
            <div className="flex flex-wrap gap-3 pb-5">
                {queryFilter.genre?<button onClick={handleFilterClick} className="bg-[#822626] px-3 py-1 text-white shadow-md shadow-slate-500 rounded flex gap-2" name="genre">{queryFilter.genre}</button>:null}
                {queryFilter.editorial?<button onClick={handleFilterClick} className="bg-[#822626] px-3 py-1 text-white shadow-md shadow-slate-500 rounded" name="editorial">{queryFilter.editorial}</button>:null}
                {queryFilter.author?<button onClick={handleFilterClick} className="bg-[#822626] px-3 py-1 text-white shadow-md shadow-slate-500 rounded" name="author">{queryFilter.author}</button>:null}
            </div>
            <h4 className="text-lg font-semibold text-[#822626] ">Género</h4>
            <div className="flex flex-col items-start gap-2 py-2 my-2 overflow-auto text-sm ">
            
              {books && getAllGenre()}
            </div>
            <h4 className="text-lg font-semibold text-[#822626]">Editorial</h4>
            <div className="flex flex-col items-start gap-2 py-2 my-2 overflow-auto text-sm">
              
              {books && getAllEditorial()}
            </div>
            <h4 className="text-lg font-semibold text-[#822626]">Autor</h4>
            <div className="flex flex-col items-start gap-2 py-2 my-2 overflow-auto text-sm">
              
              {books && getAllAuthor()}
            </div>
          </aside>
          <div
            className={`${
              filteredBooks?.length > 0
                ? "grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-4 mt-0 xl:grid-cols-3"
                : "flex justify-start items-start flex-col w-full h-full"
            }`}
          >
            {books?.length > 0 ? (
              filteredBooks?.length > 0
              ?filteredBooks?.map(({ _id, image, title, price }) => (
                <Card
                  image={image}
                  title={title}
                  price={price}
                  id={_id}
                  key={_id}
                />
              ))
              : <h2>No hay libros disponibles con esta descripción</h2>
            ) : (
              <div className="flex justify-center items-center flex-col w-full h-full">
                <p className="text-lg text-[#822626] font-semibold">
                  Cargando...
                </p>
                <img
                  className="h-auto w-52 p-10"
                  src={}
                  alt="spinner"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Books;