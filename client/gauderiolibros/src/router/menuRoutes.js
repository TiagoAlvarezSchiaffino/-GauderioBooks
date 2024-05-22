import Books from "../components/pages/Books/Books";
import BooksDetails from "../components/pages/BooksDetails/BooksDetails";
import Cart from "../components/pages/cart/Cart";
import Faq from "../components/pages/faq/Faq";
import Home from "../components/pages/home/Home";
import AdminDashBoard from "../components/pages/AdminDashboard/AdminDashboard";
import BookForm from "..//components/pages/AdminDashboard/AdminComponents/BookForm"

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "books",
    path: "/books",
    Element: Books,
  },
  {
    id: "details",
    path: "/books/:id",
    Element: BooksDetails,
  },
  {
    id: "faq",
    path: "/faq",
    Element: Faq,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "adminDash",
    path: "/adminDashboard",
    Element: AdminDashBoard,
  },
  {
    id: "newBook",
    path: "/adminDashboard/newBook",
    Element: BookForm,
  },
  {
    id: "editBook",
    path: "/adminDashboard/editBook/:id",
    Element: BookForm,
  },
];