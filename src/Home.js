import React from "react"
import "./style.css"

export default function Home() {
  return (
    <div>
      <div className="home">
        <div>
          <div className="pizzaDiv">
            <h1 className="slidingText">
              Preparate savuroase din <br />
              <span className="colored-text">bucataria balcanica</span>
            </h1>
          </div>
          <button className="orderBtn btn-white btn-animate">COMANDA ACUM</button>
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
        <div className="infoBox infoBoxLink">
            <img className="infoImg" src="./assets/images/marker.png" alt="Marker"/>
            <h1>STR. REPUBLICII, NR 1 SANNICOLAU MARE</h1>
        </div>
        <div className="infoBox infoBoxLink">
            <img className="infoImg" src="./assets/images/phone-call.png" alt="Telefon"/>
            <h1>0757 776 557</h1>
            <h2>SAU COMANDA ONLINE!</h2>
        </div>
      </div>
    </div>
  );
}
