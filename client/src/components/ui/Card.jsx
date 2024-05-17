import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({image, title, price}) {
    return (
      <div className="flex flex-col w-full h-full shadow-xl rounded-2xl">
        <img
          className="object-cover w-full rounded-t-lg"
          src={image}
          alt={`portada del libro ${title}`}
        />
        <div className="flex flex-col justify-between h-full px-5 pt-2 pb-5 ">
          <h5 className="mb-2 text-base font-semibold tracking-tight text-center lg:text-xl text-neutral-600">
            {title}
          </h5>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-bold lg:text-xl text-neutral-900">${price}</p>
            <button
              className="flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-neutral-900 hover:bg-neutral-800"
            >
              <FontAwesomeIcon className="h-5" icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    );
  }