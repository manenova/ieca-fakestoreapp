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
  
      <div className="flex-1 flex flex-col gap-4 p-4">
        <h1>FakeStore</h1>
        <SearchBar handleSearch={handleSearch} />
        {loading && <p>Cargando...</p>}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
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
  );
};

export default Home;