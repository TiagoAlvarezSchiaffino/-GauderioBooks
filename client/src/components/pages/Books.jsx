import { useEffect, useState } from "react";
import Card from "../ui/Card";

const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetch('https://gauderiolibros.vercel.app/books')
      .then((res) => res.json())
      .then((data) => setBooks(data.allBooks));
  }, []);

  const getAllGenre = () => {
    const genres = books?.map((book) => book.genre);
    const allGenres = [...new Set(genres)];
    return allGenres.map((genre) => (
      <p className="text-gray-500" key={genre}>
        {genre}
      </p>
    ));
  };

  const getAllEditorial = () => {
    const editorials = books?.map((book) => book.editorial);
    const allEditorials = [...new Set(editorials)];
    return allEditorials.map((editorial) => (
      <p className="text-gray-500" key={editorial}>
        {editorial}
      </p>
    ));
  };

  const getAllAuthor = () => {
    const Authors = books?.map((book) => book.author);
    const AllAuthor = [...new Set(Authors)];
    return AllAuthor.map((author) => (
      <p className="text-gray-500" key={author}>
        {author}
      </p>
    ));
  };

  return (
    <div className="flex flex-col gap-4 px-12 pt-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-semibold uppercase">Productos</h1>
        <p className="text-sm text-gray-500">
          {books ? books.length : 0} articulos
        </p>
      </div>
      <hr />

      <main className="w-full flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-1">
        <aside className="hidden w-full md:sticky md:block">
          <h4 className="text-lg font-semibold">Género</h4>
          <div className="flex flex-col gap-2 py-2 my-2 overflow-auto text-sm">
            {books && getAllGenre()}
          </div>
          <h4 className="text-lg font-semibold">Editorial</h4>
          <div className="flex flex-col h-48 gap-2 py-2 my-2 overflow-auto text-sm">
            {books && getAllEditorial()}
          </div>
          <h4 className="text-lg font-semibold">Autor</h4>
          <div className="flex flex-col h-48 gap-2 py-2 my-2 overflow-auto text-sm">
            {books && getAllAuthor()}
          </div>
        </aside>
        <div className="grid max-w-5xl grid-cols-2 gap-4 m-auto md:grid-cols-3">
        {books &&
            books.map(({ image, title, price }) => (
              <Card image={image} title={title} price={price} key={title} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Books;
