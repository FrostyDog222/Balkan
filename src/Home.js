import React from "react"
import "./style.css"

export default function Home() {

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
    <div id="acasa">
      <div className="home homeContainer">
        <div>
          <div className="pizzaDiv">
            <h1 className="slidingText">
              Preparate savuroase din <br />
              <span className="colored-text">bucataria balcanica</span>
            </h1>
          </div>
          <button onClick={() => scrollToSection("meniu")}className="orderBtn btn-white btn-animate">COMANDA ACUM</button>
          <p className="free">Livrare gratuita la comenzi de peste 30 RON</p>
        </div>
        <img className="pizza" src="./assets/images/pizza.png" alt="pizza" />
      </div>
      <div className="infoContainer">
        <div className="infoBox">
            <img className="infoImg" src="./assets/images/clock.png" alt="Ceas"/>
            <h1>6:00 - 00:00</h1>
            <h2>LUNI - DUMINICA</h2>
        </div>
        <a className="location" href="https://www.google.com/maps/place/Balkan+Food+House/@46.071306,20.6231238,19z/data=!4m15!1m8!3m7!1s0x4744fc5f2cb87cbb:0x9d23b3639cc1a1d0!2sStrada+Republicii+1,+S%C3%A2nnicolau+Mare+305600!3b1!8m2!3d46.071111!4d20.623906!16s%2Fg%2F11c5p7z_83!3m5!1s0x4744fd56f0ab3185:0xa53c75572f934d04!8m2!3d46.0712782!4d20.6238315!16s%2Fg%2F11nnt_d5xb?entry=ttu" target="_blank" rel="noreferrer">
        <div className="infoBox infoBoxLink" >
            <img className="infoImg" src="./assets/images/marker.png" alt="Marker"/>
            <h1>STR. REPUBLICII, NR 1 SANNICOLAU MARE</h1>
        </div>
        </a>
        <div className="infoBox">
            <img className="infoImg" src="./assets/images/phone-call.png" alt="Telefon"/>
            <h1>0757 776 557</h1>
            <h2>SAU COMANDA ONLINE!</h2>
        </div>
      </div>
    </div>
  );
}
