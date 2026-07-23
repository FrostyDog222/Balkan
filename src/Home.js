import React from "react";

const MAPS_URL =
  "https://www.google.com/maps/place/Balkan+Food+House/@46.071306,20.6231238,19z/data=!4m15!1m8!3m7!1s0x4744fc5f2cb87cbb:0x9d23b3639cc1a1d0!2sStrada+Republicii+1,+S%C3%A2nnicolau+Mare+305600!3b1!8m2!3d46.071111!4d20.623906!16s%2Fg%2F11c5p7z_83!3m5!1s0x4744fd56f0ab3185:0xa53c75572f934d04!8m2!3d46.0712782!4d20.6238315!16s%2Fg%2F11nnt_d5xb?entry=ttu";

export default function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({ behavior: "smooth", top: section.offsetTop - 80 });
    }
  };

  return (
    <section id="acasa">
      <div className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Balkan Food House</p>
          <h1 className="hero-title">
            Preparate savuroase din
            <span className="colored-text"> bucataria balcanica</span>
          </h1>
          <p className="hero-sub">
            Pizza la cuptor, shaorma, burgeri si deserturi — proaspete,
            generoase si gata de livrare.
          </p>
          <div className="hero-actions">
            <button
              onClick={() => scrollToSection("meniu")}
              className="btn btn-primary btn-lg"
            >
              Comanda acum
            </button>
            <a href="tel:+40757776557" className="btn btn-outline btn-lg">
              Suna: 0757 776 557
            </a>
          </div>
          <p className="hero-free">🚚 Livrare gratuita la comenzi de peste 30 RON</p>
        </div>
        <div className="hero-image">
          <div className="hero-emblem">
            <img
              className="hero-logo"
              src="./assets/images/logo.png"
              alt="Balkan Food House"
              width="420"
              height="420"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <div className="infoContainer">
        <div className="infoBox">
          <img className="infoImg" src="./assets/images/clock.png" alt="" />
          <h3>6:00 - 00:00</h3>
          <p>Luni - Duminica</p>
        </div>
        <a
          className="infoBox infoBoxLink"
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
        >
          <img className="infoImg" src="./assets/images/marker.png" alt="" />
          <h3>Str. Republicii nr. 1</h3>
          <p>Sannicolau Mare</p>
        </a>
        <a className="infoBox infoBoxLink" href="tel:+40757776557">
          <img className="infoImg" src="./assets/images/phone-call.png" alt="" />
          <h3>0757 776 557</h3>
          <p>Sau comanda online!</p>
        </a>
      </div>
    </section>
  );
}
