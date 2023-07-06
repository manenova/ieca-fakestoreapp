import { useState,useEffect } from "react";
import useAPI from "../hooks/useAPI";
import { useParams } from 'react-router-dom';
import { useCartContext } from "../provider/CartProvider";

const Product = () => {
    const { getSingleProduct } = useAPI();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [articulo, setArticulo] = useState();
    const { dispatch, state: {cart},} = useCartContext();

    useEffect(() => {
        getSingleProduct(id)
        .then((articulo) => {
            setArticulo(articulo);
            setLoading(false);
        })
        .catch((err) => console.error(err));
    }, []);
    
    const checkElement= () => {
        const objetoEncontrado = cart.some(item => item.id === articulo.id);

        if(objetoEncontrado ){
            dispatch({ type: "REMOVE_FROM_CART", payload: articulo });
            console.log("Eliminado...")
        }else{
            dispatch({ type: "ADD_TO_CART", payload: articulo });
            console.log("Insertado...")   
        }
    }

    const buscarObjeto = () => {
        const objetoEncontrado = cart.some(item => item.id === articulo.id);
        if (objetoEncontrado) {
            console.log('El objeto existe en el array');
        } else {
            console.log('El objeto no existe en el array');
        }
        return objetoEncontrado;
    };


    return (
   
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-11">
    {loading && <p>Cargando...</p>}
        {!loading && (
            <div>
                <img src={articulo.image} alt={articulo.title} className="max-auto w-56 h-56 object-cover object-center items-center"  />
                <div className="py-4 px-6">
                    <h2 className="text-lg font-semibold text-gray-800">{articulo.title}</h2>
                    <p className="text-gray-600 mt-2">{articulo.description}</p>
                    <p className="text-gray-800 font-bold mt-2">${articulo.price}</p>
                </div>
                { buscarObjeto() ? <button className="bg-red-700 hover:bg-red-500 text-white rounded-md p-2 mt-2" onClick={checkElement}>Quitar</button> :<button className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2" onClick={checkElement}>Agregar</button>}
            </div>
        )}
      </div>
    
    );

};

export default Product;