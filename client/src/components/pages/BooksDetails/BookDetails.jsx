import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BooksDetails() {
  const { id } = useParams();
  const [book, setBook] = useState();
  useEffect(() => {
    fetch(`https://gauderiolibros.vercel.app/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data[0]));
  }, [id]);

  return (
    <main className="w-full">
      <div className="w-3/5 m-auto">
        <div className="flex flex-col justify-center w-full gap-5 my-12 md:flex-row">
          <div className="md:w-1/2">
            <img src={book?.image} alt={book?.title} className="w-full " />
          </div>
          <div className="flex flex-col justify-between md:w-1/2">
            <div>
              <h1 className="mb-5 text-3xl font-bold">{book?.title}</h1>
              <p className="mb-5 text-lg font-medium">$ {book?.price}</p>
              <hr />
              <h2 className="text-lg font-semibold">CARACTERÍSTICAS</h2>
              <p>Autor: {book?.author}</p>
              <p>Editorial: {book?.editorial}</p>
              <p>Genero: {book?.genre}</p>
              <p>Año: {book?.year}</p>
              <p>Stock: {book?.stock}</p>
            </div>
            <div className="flex flex-row items-center gap-1">

              <button className="px-2 py-1 border border-gray-200 rounded-md">
                -
              </button>
              <span>1</span>
              <button className="px-2 py-1 border border-gray-200 rounded-md">
                +
              </button>
              <button className="px-2 py-1 text-white bg-black rounded-md">
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <p className="text-lg">Descripción</p>
          <p>{book?.description}</p>
        </div>
      </div>
    </main>
  );
}