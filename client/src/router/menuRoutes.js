import Books from "../components/pages/Books/Books";
import BooksDetails from "../components/pages/BooksDetails/BooksDetails";
import Cart from "../components/pages/Cart";
import Faq from "../components/pages/faq/Faq";
import Home from "../components/pages/home/Home";

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
    id: "user",
    path: "/user",
    Element: User,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
];