import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="./assets/images/logo.png"
            alt="Balkan Food House"
          />
          <p>Preparate savuroase din bucataria balcanica.</p>
        </div>
        <div className="footer-col">
          <h4>Program</h4>
          <p>Luni - Duminica</p>
          <p>6:00 - 00:00</p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            <a href="tel:+40757776557">0757 776 557</a>
          </p>
          <p>Str. Republicii nr. 1, Sannicolau Mare</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} Balkan Food House. Toate drepturile rezervate.</span>
      </div>
    </footer>
  );
}
