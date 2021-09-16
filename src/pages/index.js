import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Papa Al's">
      <div id="cheekslogo"><StaticImage alt="" src="../images/cheekschicken.png"/></div>
      <div id="mascot"><StaticImage alt="" src="../images/mascot.png"/></div>
      <div id="newname"><StaticImage alt="" src="../images/newname.png"/></div>
      <div id="addresscontainer">
        <div class ="addressboxyellowstripe "></div>
        <div id="addressbox">
          286 Route 46<br/>
          Rockaway, NJ 07866<br/>
          <div id="phonenumber">(201)-575-0599</div>
          <a href="https://chicken-and-waffles-rockaway-nj.square.site/">
            <div class="order">Order</div>
          </a>
        </div>
        <div id="itemsdisplay"><StaticImage alt="" src="../images/itemsdisplay.png"/></div>
        <div id="tenders"><StaticImage alt="" src="../images/tenders.jpg"/></div>
      </div>
      <div id="foodphilosophysection">
        <div id="foodphilosophylogo"><StaticImage alt="" src="../images/foodphilosophy.png"/></div>
        <div id="chickenimgcontainer">
          <div class ="yellowstripe"></div>
          <div id="chickenimg"><StaticImage alt="" src="../images/chicken.jpg"/></div>
          <div id="chickenimgtext"><div class ="boxheader">Fresh</div>All orders are cooked when you order. No heat lamps here or stale chicken here!</div>
        </div>
        <div id="storeimgcontainer">
          <div class ="yellowstripe"></div>
          <div id="storeimg"><StaticImage alt="" src="../images/store.jpg"/></div>
          <div id="storeimgtext"><div class ="boxheader">Local</div>We are local to Rockaway and intergrated into the community</div>
        </div>
        <div id="chefimgcontainer">
          <div class ="yellowstripe"></div>
          <div id="chefshatimg"><StaticImage alt="" src="../images/chefshat.jpg"/></div>
          <div id="chefshatimgtext"><div class ="boxheader">Quality</div>High-quality ingredients and preparation go into every meal. No corners cut!</div>
        </div>
      </div> 
    </Layout>
  )
}

export default IndexPage