import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Services from "./pages/Services";


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactPage from "./pages/ContactPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/services" element={<Services />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
