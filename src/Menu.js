import React, { useState } from "react";
import menuData from "./data";
import flyToCart from "./flyToCart";

const CATEGORIES = [
  { key: "Pizza", label: "Pizza" },
  { key: "FastFood", label: "Fast-Food" },
  { key: "Sandwichuri", label: "Sandwichuri" },
  { key: "Salate", label: "Salate" },
  { key: "Cartofi", label: "Cartofi" },
  { key: "Extra", label: "Extra" },
  { key: "Clatite", label: "Clatite & Desert" },
  { key: "Bauturi", label: "Bauturi" },
];

export default function Menu({ addToCart }) {
  const [currentCategory, setCurrentCategory] = useState("Pizza");
  const [added, setAdded] = useState(null);

  const handleAdd = (item, event) => {
    addToCart(item);
    flyToCart(event.currentTarget);
    setAdded(item.name);
    setTimeout(() => setAdded((n) => (n === item.name ? null : n)), 1200);
  };

  return (
    <section className="menuContainer" id="meniu">
      <h2 className="section-title">Meniu</h2>
      <p className="section-sub">Alege o categorie si adauga in cos</p>

      <div className="categories" role="tablist">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`classBtn ${currentCategory === cat.key ? "active" : ""}`}
            onClick={() => setCurrentCategory(cat.key)}
            role="tab"
            aria-selected={currentCategory === cat.key}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="menuItems">
        {menuData[currentCategory].map((item) => (
          <article className="product" key={item.name}>
            <div className="product-body">
              <h3>{item.name}</h3>
              {item.description && (
                <p className="product-desc">{item.description}</p>
              )}
              {item.quantity && (
                <span className="product-qty">{item.quantity}</span>
              )}
            </div>
            <div className="product-footer">
              <span className="product-price">{item.price}</span>
              <button
                className={`priceBtn ${added === item.name ? "added" : ""}`}
                onClick={(e) => handleAdd(item, e)}
                aria-label={`Adauga ${item.name} in cos`}
              >
                {added === item.name ? "Adaugat ✓" : "Adauga +"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
