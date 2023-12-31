import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./provider/CartProvider";
import Product from "./pages/Product";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <main className="relative">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/carrito" exact element={<Cart/>} />
            <Route path="/productos/:id" exact element={<Product/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;