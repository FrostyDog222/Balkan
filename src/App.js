import React, { useState } from "react";
import NavBar from "./navBar";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Cart from "./Cart";
import ScrollButton from "./ScrollButton";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isSolidBackground, setIsSolidBackground] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const toggleCart = () => {
    setIsSolidBackground(!isSolidBackground);
  };

  const removeFromCart = (productName) => {
    const updatedCart = cart.filter((item) => item.name !== productName);
    setCart(updatedCart);
  };

  return (
    <div>
      <NavBar />
      <Home />
      <Menu addToCart={addToCart} />
      <Contact />
      <ScrollButton />
      {cart.length > 0 && <Cart cartItems={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}
