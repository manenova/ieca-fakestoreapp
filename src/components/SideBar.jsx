import { useCartContext } from "../provider/CartProvider";

const SideBar = () =>{

    const { state: {cart},} = useCartContext();
    
    return (
        <div className="absolute right-0 mt-2 bg-white w-96 shadow-lg rounded">
            <ul className="py-2">
            {cart.map((product) => (
                <li key={product.id} className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer text-black">
                    <img src={product.image} alt={product.title} className="h-8 w-8 mr-2 rounded"/>
                    <div>
                        <span className="block text-gray-800 font-medium text-sm">{product.title}</span>
                        <span className="block text-gray-600 text-sm">Precio: ${product.price}</span>
                    </div>
                    <hr />
                </li>
               
            ))}
             <li className="flex items-center justify-center pt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Ver Carrito
              </button>
            </li>
            </ul>
        </div>
    );

}

export default SideBar;