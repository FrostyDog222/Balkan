import React, { useState } from "react";

export default function Cart({ cartItems, removeFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSolidBackground, setIsSolidBackground] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsSolidBackground(!isSolidBackground); // Adaugă sau elimină clasa "solidBackground"
  };

  return (
    <div className={`cart-container ${isSolidBackground ? 'solidBackground' : ''}`}>
      <button className="orderCart" onClick={toggleCart}>
        <img className="cart" src="./assets/images/shopping-cart.png" alt="cart" />
      </button>
      {isCartOpen && (
        <div className="cart-modal">
          <h2>Cosul de cumparaturi</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.name}>
                {item.name} - {item.price}
                <button className="deleteBtn" onClick={() => removeFromCart(item.name)}>
                <img className="delete" src="./assets/images/delete.png" alt="cart" />
                </button>
              </li>
            ))}
          </ul>
          <button className="close" onClick={toggleCart}>Inchide</button>
          <button className="close">Comanda</button>
        </div>
      )}
    </div>
  );
}