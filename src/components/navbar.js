import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import "../styling/styles.scss"


const Navbar = () => {
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
      <div id="mobile-menu"></div>
      </div>
    </div>
    )
}

export default Navbar;