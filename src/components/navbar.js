import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { getLowResolutionImageURL, StaticImage } from "gatsby-plugin-image"
import "../styling/styles.scss"


const Navbar = () => {
    const [menuOpen, setMenuOpen] =useState(false);

    useEffect( () => {
      var menu = document.getElementById('dropDownMenu');
      var toggleMenuIcon = document.getElementById('menuIconOpen');

      if (menuOpen === true) {
        menu.style.height = "14em";
        toggleMenuIcon.style.backgroundColor = "gray";
      }
      else {
        menu.style.height = "0em";
        toggleMenuIcon.style.backgroundColor = "white"
      }
    })   

    return (
    <div>
      <nav id="navbar">
        <div id="headerlogo"><StaticImage alt="" src="../images/papaals.png"/></div>
            <ul>
              <li><a href="https://chicken-and-waffles-rockaway-nj.square.site/">Order</a></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="../#addressbox">Location</Link></li>
              <li><Link to="../#foodphilosophysection">About Us</Link></li>
          </ul>
      </nav>
      <div id="mobile-menu">
      <div id="headerlogo"><StaticImage alt="" src="../images/papaals.png"/></div>
        <div id="toggleMenuOpen"> 
          <div id="menuIconOpen" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
            <div id="dropDownMenu">
              <ul>
                <li><a href="https://chicken-and-waffles-rockaway-nj.square.site/">Order</a></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="../#addressbox">Location</Link></li>
                <li><Link to="../#foodphilosophysection">About Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}

export default Navbar;