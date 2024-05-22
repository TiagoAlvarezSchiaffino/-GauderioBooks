"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { context } from "../../../../context";
import Swal from 'sweetalert2'

export default function BookForm() {
  const { getDataUser, userData } = useContext(context)
  useEffect(() => {
    getDataUser(JSON.parse(localStorage.getItem('userData'))?.data ?? {})
  }, [])
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [book, setBook] = useState();

  if (id) {
    useEffect(() => {
      fetch(`https://gauderiolibros.vercel.app/books/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data[0]));

    }, [id]);
  }

  useEffect(() => {
    if (book) {
      if (!id && book && book.title) {
        setFormData({
          title: "",
          author: "",
          year: "",
          editorial: "",
          genre: "",
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
    const { token } = userData;
    if (!id) {
      await axios
        .post(
          `https://gauderiolibros.vercel.app/books/create`,
          book, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(() => {
          setFormData({
            title: "",
            author: "",
            year: "",
            editorial: "",
            genre: "",
            stock: 0,
            image: "",
            price: 0,
            description: "",
            inCart: false,
          });
        })
        .catch((error) => window.alert(error.message));
    } else {
      Swal.fire({
        title: "Quieres guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `NO, No quiero`
      }).then((result) => {
        if (result.isConfirmed) {
          axios.put(
          `https://gauderiolibros.vercel.app/books/update/${id}`,
          book, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
        )
        .then(() => {
          setFormData({
            title: "",
            author: "",
            year: "",
            editorial: "",
            genre: "",
            stock: 0,
            image: "",
            price: 0,
            description: "",
            inCart: false,
          });
          window.location.href = "/adminDashboard";
        })
        .catch((error) => window.alert(error.message));
        Swal.fire("Guardado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se Guardaron Cambios", "", "info");
      }
    })
    }
  };

  return (
    <main className="h-full w-full flex items-center justify-center text-center my-4 rounded-xl">
      <div className="h-[70%] w-[70%] bg-[#9c1214ad] rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="bg-[#9c1214ad] w-full h-full rounded-xl grid grid-cols-1 md:grid-cols-3 text-white"
        >
          <div className="flex flex-col m-4 justify-around text-white">
            <div className="mb-6">
              <label className="font-bold mb-2 text-center">Título</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="title"
                value={formData?.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="font-bold mb-2 text-center">Autor:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="author"
                value={formData?.author}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="font-bold mb-2 text-center">Año:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="year"
                value={formData?.year}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col m-4 justify-around">
            <div className="mb-6">
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
            <div className="mb-6">
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
            <div>
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
          <div className="flex flex-col m-4 justify-around">
            <div className="mb-6">
              <label className="font-bold mb-2 text-center">Imágen</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="image"
                value={formData?.image}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="font-bold mb-2 text-center">Precio:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="price"
                value={formData?.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="font-bold mb-2 text-center">Resumen:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="description"
                value={formData?.description}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              className="text-white text-2xl w-fit bg-[#822626] hover:shadow-gray-300 hover:bg-[#e9cccc] hover:shadow-md rounded p-1 mx-auto my-2"
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