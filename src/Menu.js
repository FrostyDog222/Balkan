import React, { useState } from "react"
import menuData from "./data"

export default function Menu({ addToCart }) {
  const [currentCategory, setCurrentCategory] = useState("Pizza");

  function menuItems() {
    const currentItems = menuData[currentCategory].map((item) => {
      return (
        <div className="product" key={item.name}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.quantity}</p>
          <button className="priceBtn" onClick={() => addToCart(item)}>
          {item.price}
          </button>
        </div>
      )
    })

    return currentItems;
  }

  return (
    <div className="menuContainer" id="meniu">
      <h1 className="menuTitle">Meniu</h1>
      <div className="categories">
        <button className="classBtn" onClick={() => setCurrentCategory("Pizza")}>Pizza</button>
        <button className="classBtn" onClick={() => setCurrentCategory("FastFood")}>Fast-Food</button>
        <button className="classBtn" onClick={() => setCurrentCategory("Sandwichuri")}>Sandwichuri</button>
        <button className="classBtn" onClick={() => setCurrentCategory("Salate")}>Salate</button>
        <button className="classBtn" onClick={() => setCurrentCategory("Cartofi")}>Cartofi</button>
        <button className="classBtn" onClick={() => setCurrentCategory("Extra")}>Extra</button>
        <button className="classBtn" onClick={() => setCurrentCategory("Clatite")}>Clatite</button>
        <button className="classBtn" onClick={() => setCurrentCategory("Bauturi")}>Bauturi</button>
        </div>
      <div className="menuItems">{menuItems()}</div>
    </div>
  )
}
