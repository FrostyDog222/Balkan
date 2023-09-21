import React from "react"

export default function navBar(){

    return(
        <div>
            <div className="nav">
            <img className="logo" src="./assets/images/logo.png" alt="Balkan Logo" />
                <h1>Acasa</h1>
                <h1>Meniu</h1>
                <h1>Contacteaza-ne</h1>
                <button className="cartBtn">
                    <img className="cart" src="./assets/images/shopping-cart.png" alt="cart" />
                </button>
            </div>
        </div>
    )
}