
import React from "react"
import './navgetpoints.scss'
import {NavPoints} from "../../navspoints/navpoints"
export function NavGetPoints() {


  return <nav className="navbar">
      <NavPoints quanty={1000}/>
      <NavPoints quanty={5000}/>
      <NavPoints quanty={7500}/>
    </nav>

} 



/*      <ul className="navbar-nav">Add 5000 Points</ul>
      <ul className="navbar-nav">Add 7500 Points</ul>*/