import { useContext, useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { context } from "../../../context";

export default function BooksDetails() {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [count, setCount] = useState(1);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://gauderiolibros.vercel.app/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data[0]));
  }, [id]);

  const handleClickSum = () => setCount((e) => e + 1);
  const handleClickRes = () => setCount((e) => (e > 1 ? e - 1 : 1));

  const { products, addProduct, deleteAllProducts, deleteProduct } =
    useContext(context);

  const handleClick = (title, price, quantity,image) => {
    addProduct({ title, price, quantity,image });   

    navigate('/books')
  };

  return (
    <main className="w-full">
      <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[65%] m-auto">
        <div className="flex flex-col justify-center w-full gap-5 my-12 md:flex-row">
          <div className="flex items-center justify-center w-full ">
            <img src={book?.image} alt={book?.title} className="w-80 rounded" />
          </div>
          <div className="flex flex-col justify-between md:w-2/3">
            <div className="divide-y">
              <h1 className="py-5 text-3xl font-bold text-center md:text-left text-[#822626]">
                {book?.title}
              </h1>
              <p className="py-2 text-lg font-medium text-center md:text-left text-[#525252]">
                $ {book?.price}
              </p>
              <h2 className="py-2 text-base font-semibold text-center md:text-left text-[#525252]">
                CARACTERÍSTICAS
              </h2>
              <div className="flex flex-row justify-between ">
                <span className="w-full text-center md:text-left">Autor:</span>
                <span className="w-full text-center md:text-left">
                  {book?.author}
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="w-full text-center md:text-left">
                  Editorial:
                </span>
                <span className="w-full text-center md:text-left">
                  {book?.editorial}
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="w-full text-center md:text-left">Genero:</span>
                <span className="w-full text-center md:text-left">
                  {book?.genre}
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="w-full text-center md:text-left">Año:</span>
                <span className="w-full text-center md:text-left">
                  {book?.year}
                </span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="w-full text-center md:text-left">Stock:</span>
                <span className="w-full text-center md:text-left">
                  {book?.stock}
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-2 mt-4">
              <div className="flex items-center justify-center flex-[.5]">
                <button
                  onClick={handleClickRes}
                  className="px-2 py-1 border border-gray-200 rounded-sm"
                >
                  -
                </button>
                <span className="px-2 py-1">{count}</span>
                <button
                  onClick={handleClickSum}
                  className="px-2 py-1 border border-gray-200 rounded-sm"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  handleClick(book.title, book.price, count, book.image);
                }}
                className="flex-1 py-3 text-white transition-colors bg-[#690202] rounded-sm hover:bg-[#262525]"
              >
                AGREGAR
              </button>
            </div>
          </div>
        </div>
        <div className="mb-12 divide-y">
          <p className="mb-2 text-xl text-center">Descripción</p>
          <p className="pt-2">{book?.description}</p>
        </div>
      </div>
    </main>
  );
}