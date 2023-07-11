import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useAPI();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-90">FakeStore</h2>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <hr className="mt-4"/>

        {loading && <p>Cargando...</p>}
        {!loading && (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
                ))
              : products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  
  );
};

export default Home;