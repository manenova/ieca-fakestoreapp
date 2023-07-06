import { useCartContext } from "../provider/CartProvider";

const CardItem = ({ product }) => {

const { dispatch } = useCartContext(); 

  return (
    <div className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4">
      <img src={product.image} alt={product.title} className="w-28 h-28 object-cover self-center" />
    
      <h2 className="text-center font-bold">{product.title}</h2>
      <span className="text-center">${product.price}</span>
      <button className="bg-red-950 hover:bg-red-800 text-white rounded-md p-2 mt-2" onClick={ ()=>{
         dispatch({ type: "REMOVE_FROM_CART", payload: product })
      }}>Eliminar</button>
      </div>);
};

export default CardItem;