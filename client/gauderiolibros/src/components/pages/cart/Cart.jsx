import { useContext } from "react";
import { context } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import axios from "axios";

const Cart = () => {
  const {
    storageProducts,
    deleteAllProducts,
    deleteProduct,
    totalPrice,
    loginOk,
    openModal,
  } = useContext(context);

  const navigate = useNavigate();

  const handleClick = () => {
    if (loginOk) {
      let refCart = storageProducts.map(({ title, price, quantity }) => {
        return { title, price, quantity };
      });
      axios
        .post(
          "https://gauderiolibros.vercel.app/pay/create-checkout-session",
          refCart
        )
        .then((res) => {
          window.location.href = res.data.url;
        })
        .catch((error) => console.log(error));
    } else {
      openModal();
    }
  };

  return (
    <main className="w-full min-h-[calc(100vh-230px)] ">
      <div className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%] m-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl p-3 mt-5 text-center rounded text-[#690202] font-bold ">
          Realiza tu compra
        </h1>
        <div className="w-full my-5">
          <div className="bg-[#525252] text-white p-2  rounded-t">
            <h1 className=" text-base sm:text-lg md:text-xl lg:text-2xl">
              Detalle de pedido
            </h1>
          </div>
          <div className="grid w-full grid-cols-9 p-2 bg-gray-200 text-xs sm:text-sm md:text-base lg:text-lg border-b border-gray-400">
            <span className="col-span-2 font-medium text-center">Artículo</span>
            <span className="col-span-2 font-medium text-center">Título</span>
            <span className="col-span-2 font-medium text-center">Cantidad</span>
            <span className="col-span-2 font-medium text-center">Precio</span>
          </div>
          <div
            className={`overflow-y-auto h-96 min-h-full bg-gray-200 text-xs sm:text-sm md:text-base lg:text-lg`}
          >
            {storageProducts.length > 0 ? (
              storageProducts.map((product) => (
                <div
                  className="grid items-center grid-cols-9 px-2 py-3  "
                  key={product.id}
                >
                  <img
                    className="w-20 col-span-2 justify-self-center  rounded "
                    src={product.image}
                    alt={product.title}
                  />
                  <span className="col-span-2 text-center">
                    {product.title}
                  </span>
                  <span className="col-span-2 text-center">
                    {product.quantity}
                  </span>
                  <span className="col-span-2 text-center">
                    $ {product.price}
                  </span>
                  <button
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
                    className="text-center"
                  >
                    <FontAwesomeIcon
                      className="h-5 hover:text-[#822626]"
                      icon={faTrash}
                    />
                  </button>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-14">
                <FontAwesomeIcon className="h-16 py-3" icon={faCartShopping} />
                <span className="mb-2 text-lg py-3 p-2 text-center">
                  Aún no has agregado artículos a tu carrito.
                </span>
                <span>Busca los libros que más te gusten!</span>
                <button
                  onClick={() => {
                    navigate("/books");
                  }}
                  className="py-3 px-2 mt-5 text-white transition-colors bg-[#690202] rounded-sm hover:bg-[#262525]"
                >
                  Descubrir productos
                </button>
              </div>
            )}
          </div>
          <div className="grid w-full items-center grid-cols-9 p-0.5 md:p-2 bg-gray-200 border-t border-gray-400 rounded-b">
            <div className=" col-span-3 sm:col-span-4">
              <button
                onClick={deleteAllProducts}
                className="p-2 text-xs sm:text-sm md:text-base lg:text-lg underline rounded-sm transition-colors border hover:border-[#822626] hover:text-[#822626]"
              >
                Eliminar todo
              </button>
            </div>
            <span className="col-span-2 font-bold text-center text-xs sm:text-sm md:text-base lg:text-lg">
              Total:
            </span>
            <span className="col-span-2 text-center text-xs sm:text-sm md:text-base lg:text-lg">
              $ {totalPrice}
            </span>
            <div className="flex flex-row items-end justify-end w-full col-span-2 sm:col-span-1">
              <button
                onClick={handleClick}
                className="w-full h-full text-[0.6rem] sm:text-sm md:text-base lg:text-lg text-center py-1 px-0.5 md:py-2 md:px-1 rounded-sm transition-colors bg-[#822626] hover:bg-[#262525] text-white"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;