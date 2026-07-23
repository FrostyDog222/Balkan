/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

export default function NavBar({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ behavior: "smooth", top: section.offsetTop - 80 });
    }
  };

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <img
          className="logo"
          src="./assets/images/logo.png"
          alt="Balkan Food House"
          onClick={() => scrollToSection("acasa")}
        />

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a onClick={() => scrollToSection("acasa")}>Acasa</a>
          <a onClick={() => scrollToSection("meniu")}>Meniu</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button
            id="cart-target"
            className="cart-btn"
            onClick={onCartClick}
            aria-label={`Deschide cosul (${cartCount} produse)`}
          >
            <img
              className="cart-icon"
              src="./assets/images/shopping-cart.png"
              alt=""
            />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meniu de navigare"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
