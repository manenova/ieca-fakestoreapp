
import { useCartContext } from "../provider/CartProvider";
import { Link } from 'react-router-dom';


const ProductItem = ({ product }) => {

 const { dispatch, state: {cart},} = useCartContext();

  const checkElement= () => {
    const objetoEncontrado = cart.some(item => item.id === product.id);
    
    if( objetoEncontrado){
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
      console.log("Eliminado...")
    }else{
      dispatch({ type: "ADD_TO_CART", payload: product });
      console.log("Insertado...")   
    }
  }

  
  const buscarObjeto = () => {
    const objetoEncontrado = cart.some(item => item.id === product.id);
    if (objetoEncontrado) {
      console.log('El objeto existe en el array');
    } else {
      console.log('El objeto no existe en el array');
    }
    return objetoEncontrado;
  };

  return (
    <>
      <div className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4">
        <img src={product.image} alt={product.title} className="w-28 h-28 object-cover self-center" />
        <h2 className="text-center font-bold  hover:text-blue-900">
        <Link to={`/productos/${product.id}`}> {product.title}</Link>
        </h2>
        <span className="text-center">${product.price}</span>
        { buscarObjeto() ? <button className="bg-red-700 hover:bg-red-500 text-white rounded-md p-2 mt-2" onClick={checkElement}>Quitar</button> :<button className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2" onClick={checkElement}>Agregar</button>}
      
      </div>
     </>
  );
 
};

export default ProductItem;