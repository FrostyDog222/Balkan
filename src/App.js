import React, { useState, useCallback } from "react";
import NavBar from "./navBar";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Cart from "./Cart";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";
import Footer from "./Footer";
import ScrollButton from "./ScrollButton";
import {
  addItem,
  incItem,
  decItem,
  removeItem,
  cartCount,
  cartTotal,
} from "./cartLogic";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [lastPayment, setLastPayment] = useState("cash");

  const addToCart = useCallback((product) => {
    setCart((prev) => addItem(prev, product));
  }, []);

  const incrementItem = useCallback((name) => {
    setCart((prev) => incItem(prev, name));
  }, []);

  const decrementItem = useCallback((name) => {
    setCart((prev) => decItem(prev, name));
  }, []);

  const removeFromCart = useCallback((name) => {
    setCart((prev) => removeItem(prev, name));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const openCheckout = useCallback(() => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  }, []);

  // No backend — placing an order just clears the cart and confirms on screen.
  const placeOrder = useCallback((order) => {
    setLastPayment(order?.payment === "card" ? "card" : "cash");
    setIsCheckoutOpen(false);
    setOrderPlaced(true);
    setCart([]);
  }, []);

  const count = cartCount(cart);
  const total = cartTotal(cart);

  return (
    <div className="app">
      <NavBar cartCount={count} onCartClick={() => setIsCartOpen(true)} />
      <main>
        <Home />
        <Menu addToCart={addToCart} />
        <Contact />
      </main>
      <Footer />
      <ScrollButton />

      {count > 0 && (
        <button
          className="floating-cart"
          onClick={() => setIsCartOpen(true)}
          aria-label={`Deschide cosul (${count} produse)`}
        >
          <img
            className="floating-cart-icon"
            src="./assets/images/shopping-cart.png"
            alt=""
          />
          <span className="floating-cart-badge">{count}</span>
          <span className="floating-cart-total">{total} RON</span>
        </button>
      )}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        cartTotal={total}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        onCheckout={openCheckout}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        cartTotal={total}
        onPlaceOrder={placeOrder}
      />

      <OrderSuccess
        isOpen={orderPlaced}
        method={lastPayment}
        onClose={() => setOrderPlaced(false)}
      />
    </div>
  );
}
