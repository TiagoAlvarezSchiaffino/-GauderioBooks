import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../../../context";

export default function Card({ id, image, title, price, info }) {
  const { addProduct } = useContext(context);

  const handleClick = (title, price, quantity) => {
    addProduct({ title, price, quantity });
  };

  return (
    <Link
      to={`/books/${id}`}
      className="relative flex flex-col w-full h-full max-w-xs m-auto rounded-lg shadow-md"
    >
      <img
        className="object-fill h-[350px] rounded-t-lg"
        src={image}
        alt={`portada del libro ${title}`}
      />
      <div
        className={`${
          info ? "h-20" : "h-full"
        } bg-white rounded-b-lg flex flex-col justify-between  px-5 pt-2 pb-5 `}
      >
        <h5 className="mb-2 text-base font-semibold tracking-tight text-center lg:text-lg text-[#525252]">
          {title}
        </h5>
        <div
          className={`${
            info ? "hidden" : "flex"
          } items-center justify-between gap-2`}
        >
          <p className="text-sm font-bold lg:text-xl text-[#525252]">
            ${price}
          </p>
          <button
            onClick={() => {
              handleClick(title, price, 1);
            }}
            className="flex items-center z-50 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#690202] hover:text-[#262525] hover:bg-[#822626] transition-colors"
          >
            <FontAwesomeIcon className="h-5" icon={faCartPlus} />
          </button>
        </div>
      </div>
    </Link>
  );
}