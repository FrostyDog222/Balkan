import React, { useState } from "react";

const PHONE_DISPLAY = "0757 776 557";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyPhoneNumber = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(PHONE_DISPLAY);
      } else {
        const ta = document.createElement("input");
        ta.value = PHONE_DISPLAY;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contacteaza-ne</h2>
      <p className="section-sub">Suntem la un telefon distanta</p>
      <div className="contactContainer">
        <button
          type="button"
          className="contactOptions"
          onClick={copyPhoneNumber}
        >
          <img
            className="contactImg"
            src="./assets/images/phone-call.png"
            alt=""
          />
          <h3>{PHONE_DISPLAY}</h3>
          <span className="contact-hint">
            {copied ? "Numar copiat ✓" : "Apasa pentru a copia"}
          </span>
        </button>

        <a
          className="contactOptions"
          href="https://www.facebook.com/profile.php?id=100067158668509"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="contactImg"
            src="./assets/images/facebook.png"
            alt=""
          />
          <h3>Balkan Food House</h3>
          <span className="contact-hint">Urmareste-ne pe Facebook</span>
        </a>
      </div>
    </section>
  );
}
