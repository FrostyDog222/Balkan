import React from "react"
import Nav from "./navBar"
import Home from "./Home"
import Menu from "./Menu"
import Contact from "./Contact"


export default function App(){
    return (
      <div>
        <Nav />
        <Home />
        <Menu />
        <Contact />
      </div>
    )
}