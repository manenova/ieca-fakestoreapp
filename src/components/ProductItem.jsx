
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
   
      <div className="group relative">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={product.image} alt={product.title} className="h-auto w-80 object-cover object-center lg:h-80 lg:w-80"/>
        </div>

          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-blue-500">
                 <Link to={`/productos/${product.id}`}> {product.title}</Link>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">${product.price}</p>
		  </div>
		  { buscarObjeto() ? <button className="w-full bg-red-700 hover:bg-red-500 text-white rounded-md p-2 mt-2" onClick={checkElement}>Quitar</button> :<button className="w-full bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2" onClick={checkElement}>Agregar</button>}
		
        </div>
  
  );
 
};

export default ProductItem;