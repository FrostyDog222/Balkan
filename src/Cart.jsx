import React, { useEffect } from "react";

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  cartTotal,
  incrementItem,
  decrementItem,
  removeFromCart,
  clearCart,
  onCheckout,
}) {
  // Close the drawer with the Escape key and lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const isEmpty = cartItems.length === 0;

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`cart-drawer ${isOpen ? "open" : ""}`}
        aria-label="Cosul de cumparaturi"
        aria-hidden={!isOpen}
      >
        <div className="cart-header">
          <h2>Cosul tau</h2>
          <button className="cart-close" onClick={onClose} aria-label="Inchide cosul">
            &times;
          </button>
        </div>

        {isEmpty ? (
          <div className="cart-empty">
            <span className="cart-empty-icon" aria-hidden="true">🛒</span>
            <p>Cosul tau este gol.</p>
            <button className="btn btn-primary" onClick={onClose}>
              Vezi meniul
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li className="cart-item" key={item.name}>
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">{item.price}</span>
                  </div>
                  <div className="cart-item-controls">
                    <div className="qty-stepper">
                      <button
                        onClick={() => decrementItem(item.name)}
                        aria-label={`Scade cantitatea pentru ${item.name}`}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => incrementItem(item.name)}
                        aria-label={`Creste cantitatea pentru ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.name)}
                      aria-label={`Elimina ${item.name}`}
                    >
                      Elimina
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>{cartTotal} RON</span>
              </div>
              <p className="cart-note">
                Completeaza detaliile de livrare la pasul urmator.
              </p>
              <button className="btn btn-primary btn-block btn-lg" onClick={onCheckout}>
                Comanda
              </button>
              <button className="cart-clear" onClick={clearCart}>
                Goleste cosul
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
