/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import Header from "./header"
import Footer from "./Footer"
import Seo from "./seo.js"

const Layout = ({ children,extraClassNames,location }) => { 
  return (
    <>
      <Seo location={location}/>
      <Helmet>
          
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
          {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js"></script> */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.2/masonry.pkgd.min.js"></script> */}
          {/* <script src="app.js"></script> */}
      </Helmet>
      <article className={`site ${extraClassNames}`}>
          <Header/>
          <main>{children}</main>
          <Footer/>
          <Helmet>
            <script src="./js/app.js"></script>
          </Helmet>
      </article> 
    </>
  )
}

export default Layout

