import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import closeMenuSvg from '../../static/close-menu.svg'
import logoShapeSvg from '../../static/logo-shape.svg'
import openMenuSvg from '../../static/open-menu.svg'
import grandworksGray from '../../static/grandworks_grey.svg'

class Header extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      isMobileMenuOpen : false
    }
    this.toggleOpenClose = this.toggleOpenClose.bind(this);
  }

  toggleOpenClose()
  {
    this.setState({isMobileMenuOpen: !this.state.isMobileMenuOpen})
  }

render(){
  return (
    <>
    <aside className="main-site">
      <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={"/"} className="home-link">
        <div className="grandworks">
          <img src={logoShapeSvg} alt="" />
        </div>
      </AniLink>
      <div className="sidebar-navigation">
      <nav>
          <div class="menu-main-navigation-container">
            <ul id="primary-menu" class="menu">
              <li id="menu-item-95" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95">
                <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={"/about"}>About</AniLink>
              </li>
              <li id="menu-item-253" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-253">
                <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={"/case-studies"}>Works</AniLink>
              </li>
              <li id="menu-item-210" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-210">
                <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={"/journal"} >Journal</AniLink>
              </li>
              <li id="menu-item-102" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={"/contact"}>Contact</AniLink>
              </li>
            </ul>
          </div>      
      </nav>
      </div>
  </aside>
  <div id="mobile-navigation">
    <div className={this.state.isMobileMenuOpen == true ? "open-menu hide" : "open-menu"} onClick={this.toggleOpenClose}>
      <img src={openMenuSvg} alt="" />
    </div>
    <div className={this.state.isMobileMenuOpen == true ? "mobile-menu open" : "mobile-menu close hide"}>
      <div className="wrap">
        <div className="logo">
          <img src={grandworksGray} alt="" />
        </div>
        <nav>
          <div class="menu-main-navigation-container">
            <ul id="primary-menu" class="menu">
              <li id="menu-item-95" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95">
                <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={"/about"}>About</AniLink>
              </li>
              <li id="menu-item-253" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-253">
                <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={"/case-studies"}>Works</AniLink>
              </li>
              <li id="menu-item-210" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-210">
                <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={"/journal"} >Journal</AniLink>
              </li>
              <li id="menu-item-102" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-102">
                <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={"/contact"}>Contact</AniLink>
              </li>
            </ul>
          </div>      
        </nav>
        <div className="close-menu" onClick={this.toggleOpenClose}>
          <img src={closeMenuSvg} alt="" />
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
}

export default Header
