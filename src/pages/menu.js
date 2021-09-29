import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image";

const Menu = () => {
  return <Layout pageTitle="Papa Al's Menu">
    <StaticImage alt="" src="../images/menu.jpg"/>
  </Layout>
}

export default Menu;