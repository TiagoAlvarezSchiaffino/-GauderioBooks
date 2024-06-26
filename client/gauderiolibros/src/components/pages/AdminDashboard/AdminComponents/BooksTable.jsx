import { useContext, useEffect, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import axios from "axios";
import { context } from "../../../../context";
import Swal from 'sweetalert2';

const booksColumns = [
  {
    accessorKey: "_id",
    header: "ID",
    cell: (row) => row.original._id,
  },
  {
    accessorKey: "image",
    header: "Imagen",
    cell: (row) => (
      <img
        height={70}
        width={60}
        src={row.original.image}
        alt="Imagen del libro"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Titulo",
    cell: (row) => row.original.title,
  },
  {
    accessorKey: "price",
    header: "Precio",
    cell: (row) => row.original.price,
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: (row) => row.original.stock,
  },
];

export default function AdminBooksTable() {
  const { userData, getDataUser } = useContext(context);

  useEffect(() => {
    getDataUser(JSON.parse(localStorage.getItem('userData'))?.data ?? {});
  }, [getDataUser]);

  const [books, setBooks] = useState([]);
  const [sorting, setSorting] = useState();
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data: books,
    columns: booksColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  const deleteBook = (_id) => {
    const { token } = userData;

    Swal.fire({
      title: "¿Estas seguro de eliminar?",
      text: "Esta accion no tiene marcha atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, deseo eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://gauderiolibros.vercel.app/books/delete/${_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(() => {
          Swal.fire({
            title: "Eliminado!",
            text: "El libro ha sido eliminado.",
            icon: "success"
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch(() => {
          window.alert("Error al eliminar el libro");
        });
      }
    });
  };

  useEffect(() => {
    fetch("https://gauderiolibros.vercel.app/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.allBooks));
  }, []);

  return (
    <div className=" w-full h-full ">
      <div className="rounded-lg w-full h-1/6 bg-slate-700 mb-2 items-stretch text-center">
        <span className="m-2 text-2xl text-white">Total de Libros: </span>
        <span className="m-2 mr-4 text-2xl text-lime-600">{books.length}</span>
        <div>
          <span className="m-2 text-lg text-white">
            Filtrar por cualquier Propiedad
          </span>
          <input
            className="rounded-lg text-black"
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
          <Link to={`/adminDashboard/newBook`}>
            <button className="text-white text-2xl ml-20 bg-[#822626] hover:shadow-gray-300 hover:bg-[#e9cccc] hover:shadow-md rounded p-1">
              Crear Libro
            </button>
          </Link>
        </div>
      </div>
      <div className="h-4/6">
        <table className=" rounded-lg w-full h-full bg-slate-700">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-slate-300 bg-black text-2xl text-white border-solid border p-4"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border-slate-300 border-solid border p-2"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                        {header.column.getIsSorted()
                          ? { asc: "⬆️", desc: "⬇️" }[
                            header.column.getIsSorted()
                          ]
                          : null}
                      </div>
                    )}
                  </th>
                ))}
                <th className="border-slate-300 border-solid border">Editar</th>
                <th className="border-slate-300 border-solid border">
                  Eliminar
                </th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? " bg-red-800" : " bg-red-950"}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border-slate-300 border-solid border text-2xl text-white p-3"
                  >
                    {cell.column.columnDef.cell(row)}
                  </td>
                ))}
                <td className="border-slate-300 border-solid border text-3xl text-white text-center">
                  <Link
                    to={`/adminDashboard/editBook/${row.original._id}`}
                    className="text-center"
                  >
                    ✏️
                  </Link>
                </td>
                <td className="border-slate-300 border-solid border text-3xl text-white text-center">
                  <button className="text-center" onClick={() => { deleteBook(row.original._id) }}>
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-1/6 w-full flex justify-evenly bg-black text-white mt-2 rounded-lg">
        <button className="text-2xl" onClick={() => table.setPageIndex(0)}>
          Primera
        </button>
        <button className="text-4xl" onClick={() => table.previousPage()}>
          ⬅️
        </button>
        <span className="text-2xl">
          {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </span>
        <button
          className="text-4xl"
          onClick={() => {
            if (
              table.getPageCount() > 1 &&
              table.getState().pagination.pageIndex < table.getPageCount() - 1
            ) {
              table.nextPage();
            }
          }}
          disabled={
            table.getPageCount() <= 1 ||
            table.getState().pagination.pageIndex >= table.getPageCount() - 1
          }
        >
          ➡️
        </button>
        <button
          className="text-2xl"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Ultima
        </button>
      </div>
    </div>
  );
}