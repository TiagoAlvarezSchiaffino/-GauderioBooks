"use client";
import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BookForm() {
  const { _id } = useParams();
  console.log(_id)
  const [formData, setFormData] = useState();
  const [book, setBook] = useState();

  useEffect(() => {
    fetch(`https://gauderiolibros.vercel.app/books/${_id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
      console.log(book)
  }, [_id]);

  useEffect(() => {
    if (book) {
      if (!_id && book && book.title) {
        setFormData({
          title: "",
          author: "",
          year: "",
          editorial: "",
          genre: 0,
          stock: 0,
          image: "",
          price: 0,
          description: "",
          inCart: false,
        });
      } else {
        setFormData({
          title: book.title,
          author: book.author,
          year: book.year,
          editorial: book.editorial,
          genre: book.genre,
          stock: book.stock,
          image: book.image,
          price: book.price,
          description: book.description,
          inCart: false,
        });
      }
    }
  }, [book]);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = {
      title: formData.title,
      author: formData.author,
      year: formData.year,
      editorial: formData.editorial,
      genre: formData.genre,
      stock: formData.stock,
      image: formData.image,
      price: formData.price,
      description: formData.description,
      inCart: false,
    };
    console.log(book);
    if(!_id){
      await axios
      .post(
        `https://gauderiolibros.vercel.app/books/create`,
        book)
        .then(() => {
          setFormData({
            title: "",
            author: "",
            year: "",
            editorial: "",
            genre: 0,
            stock: 0,
            image: "",
            price: 0,
            description: "",
            inCart: false,
          });
        })
        .catch((error) => window.alert(error.message));
      }else{
        await axios
        .post(
          `https://gauderiolibros.vercel.app/books/update/${_id}`,
          book
        )
        .catch((error) => window.alert(error.message));
      }

  };

  return (
    <main className="h-full w-full m-4">
      <div>
        <form
          onSubmit={handleSubmit}
          className=" bg-slate-700 shadow-md w-full h-full rounded-xl grid grid-cols-2"
        >
          <div className="flex flex-row m-4 justify-around">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="font-bold mb-2 text-center">
                Título
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                value={formData?.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 justify-center content-center">
              <label>Autor:</label>
              <input
                className=" w-12 h-12 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="author"
                checked={formData?.author}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 justify-center content-center">
              <label>Año:</label>
              <input
                className=" w-12 h-12 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="year"
                checked={formData?.year}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-evenly">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="font-bold mb-2 text-center">Editorial:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="editorial"
                value={formData?.editorial}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="font-bold mb-2 text-center">Género:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="genre"
                value={formData?.genre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="font-bold mb-2 text-center">Stock:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="stock"
                value={formData?.stock}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-row m-4 justify-around">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="font-bold mb-2 text-center">
                Imágen
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="image"
                value={formData?.image}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 justify-center content-center">
              <label>Precio:</label>
              <input
                className=" w-12 h-12 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="price"
                checked={formData?.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
            <div className="w-full md:w-1/3 px-3 justify-center content-center">
              <label>Resumen:</label>
              <input
                className=" w-12 h-12 shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="description"
                checked={formData?.description}
                onChange={handleInputChange}
              />
            </div>
            </div>
          </div>
          <div>
            <button
              className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 p-4 border-solid"
              type="submit"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}