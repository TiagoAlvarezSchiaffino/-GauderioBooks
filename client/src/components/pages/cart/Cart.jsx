import { useContext } from "react";
import { context } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";


const Cart = () => {
  const { products, deleteAllProducts, deleteProduct,totalPrice } =
    useContext(context);
  const navigate = useNavigate()
  return (
    <main className="w-full min-h-[calc(100vh-150px)] ">
      <div className="w-3/5 m-auto">
        {products.length > 0 ? (
          <div className="w-full my-10">
          <div className="bg-[#525252] text-white p-2 rounded-t">
            <h1 className="text-2xl ">Detalle de pedido</h1>
          </div>
            <div className="grid w-full grid-cols-9 p-2 bg-gray-200   border-b border-gray-400">
              <span className="col-span-2 font-medium text-center">Artículo</span>
              <span className="col-span-2 font-medium text-center">Título</span>
              <span className="col-span-2 font-medium text-center">Cantidad</span>
              <span className="col-span-2 font-medium text-center">Precio</span>
              
            </div>
            <div className={`overflow-y-scroll ${products.length<3?'h-[18rem]':'h-[28rem]'} bg-gray-200`}>
              {products.map((product) => (
              <div
                className="grid items-center grid-cols-9 px-2 py-3"
                key={product.id}
              >
                <img className="w-20 col-span-2 justify-self-center  rounded " src={product.image} alt={product.title} />
                <span className="col-span-2 text-center">{product.title}</span>
                <span className="col-span-2 text-center">{product.quantity}</span>
                <span className="col-span-2 text-center">$ {product.price}</span>
                <button onClick={() => {deleteProduct(product.id)}} className="text-center "><FontAwesomeIcon className="h-5 hover:text-[#822626]" icon={faTrash} /></button>
              </div>
            ))}
            </div>
            
            <div className="grid w-full grid-cols-9 p-2 bg-gray-200 border-t border-gray-400 rounded-b">
              <div className="col-span-4"><button onClick={deleteAllProducts} className="p-2 underline rounded-sm transition-colors border hover:border-[#822626] hover:text-[#822626]">Eliminar todo</button></div>
              <span className="col-span-2 font-bold text-center">Total:</span>
              <span className="col-span-2 text-center">$ {totalPrice}</span>
              
            </div>
            <div className="flex flex-row items-end justify-end w-full">
            <button onClick={console.log(products)} className="py-3 px-2 mt-5 text-white transition-colors bg-[#690202] rounded-sm hover:bg-[#262525]">IR AL METODO DE PAGO</button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-[30rem] rounded mt-12 mb-0 bg-gray-200">
            <div className="flex flex-col items-center justify-center py-5">
            <FontAwesomeIcon className="h-16 py-3" icon={faCartShopping} />
              <span className="mb-2 text-lg py-3">Aún no has agregado artículos a tu compra.</span>
              <span>Busca los libros que más te gusten.</span>
              <button onClick={() => {navigate("/books")}} className="py-3 px-2 mt-5 text-white transition-colors bg-[#690202] rounded-sm hover:bg-[#262525]">Descubrir productos</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
