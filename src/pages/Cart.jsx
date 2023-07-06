import { useCartContext } from "../provider/CartProvider";
import CardItem from "../components/CartItem";

const Cart = () =>{
    
    const { state: {cart, totalPrice},} = useCartContext();


    return (
        <div className="flex-1 justify-between ">
        <h1 className="p-4">Carrito compras</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-5">
              {cart.map((product) => (
               <CardItem product={product}/>
              ))}
         </div>
         <div className="font-bold text-3xl">Total :${totalPrice}</div>
      </div>

      );
};

export default Cart;