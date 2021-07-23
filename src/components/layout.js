import * as React from 'react'
import "../styling/styles.scss"
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout