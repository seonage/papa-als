import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import "../styling/styles.scss"

const Footer = () => {
    return (
    <div id="footer">
        <div id="facebook">
            <a href="https://www.facebook.com/papaalchickenrockaway">
                <StaticImage alt="" src="../images/facebookicon.png"/>
            </a>
        </div>
        <div id="instagram">
            <a href="https://www.instagram.com/papaalchickenrockaway/">
                <StaticImage alt="" src="../images/instagramicon.png"/>
            </a>
        </div>
        <div id ="footertext">
            Open Every Day Except Tuesday<br/> 11 AM - 8 PM
        </div>
    </div>
    
    )
}

export default Footer;