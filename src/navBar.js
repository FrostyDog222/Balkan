/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

export default function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      })
    }
  }

  return (
    <div>
      <div className="nav">
        <img className="logo" src="./assets/images/logo.png" alt="Balkan Logo" />
        <a onClick={() => scrollToSection("acasa")}>Acasa</a>
        <a onClick={() => scrollToSection("meniu")}>Meniu</a>
        <a onClick={() => scrollToSection("contact")}>Contacteaza-ne</a>
        <button className="cartBtn">
          <img className="cart" src="./assets/images/shopping-cart.png" alt="cart" />
        </button>
      </div>
    </div>
  );
}
