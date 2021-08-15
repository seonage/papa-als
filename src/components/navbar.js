import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import "../styling/styles.scss"


const Navbar = () => {
    const [menuOpen, setMenuOpen] =useState(false);

    return (
    <div>
      <nav id="navbar">
        <div id="headerlogo"><StaticImage alt="" src="../images/papaals.png"/></div>
            <ul>
              <li><a href="https://chicken-and-waffles-rockaway-nj.square.site/">Order</a></li>
              <li><Link to="/">Menu</Link></li>
              <li><Link to="/">Location</Link></li>
              <li><Link to="/">About Us</Link></li>
          </ul>
      </nav>
      <div id="mobile-menu">
        {menuOpen ?
        (<div id="toggleMenuOpen" onClick={() => setMenuOpen(!menuOpen)}>
          <div id="menuIcon">&#9776;</div>
          <div id="dropDownMenu">
            <ul>
              <li><a href="https://chicken-and-waffles-rockaway-nj.square.site/">Order</a></li>
              <li><Link to="/">Menu</Link></li>
              <li><Link to="/">Location</Link></li>
              <li><Link to="/">About Us</Link></li>
            </ul>
          </div>
        </div>) : 
        (<div id="toggleMenuClose" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>)}
      </div>
    </div>
    )
}

export default Navbar;