import React from 'react';
import buttonArrow from '../../static/button-arrow.svg'
const Footer = () => {
    return (
        <footer id="site-footer">
            <section id="social">
            <div className="grid-container">
                <div>
                <div className="grid-x grid-padding-x">
                <div className="large-12 cell">
                    <a href="https://www.facebook.com/grandworksco" target="_blank" rel="noopener noreferrer"><h2 data-aos="fade-up" data-aos-offset="-300" data-aos-anchor="#social" data-aos-anchor-placement="top">Facebook.</h2></a>
                    <a href="https://www.instagram.com/grandworksco" target="_blank" rel="noopener noreferrer"><h2 data-aos="fade-up" data-aos-offset="-300" data-aos-anchor="#social" data-aos-anchor-placement="top">Instagram.</h2></a>
                    <a href="https://twitter.com/grandworksco" target="_blank" rel="noopener noreferrer"><h2 data-aos="fade-up" data-aos-offset="-300" data-aos-anchor="#social" data-aos-anchor-placement="top">Twitter.</h2></a>
                </div>
                </div>
            </div>
            </div>
            </section>

            <section id="contact-form">
            <div className="grid-container" data-aos="fade-up" data-aos-offset="-300">
                <div>
                <div className="form-wrap">

                <form action="" method="POST" className="grid-x grid-padding-x the-contact-form">

                <div className="small-12 large-12 cell">
                    <h2>Get in touch</h2>
                </div>
                <div className="small-12 large-9 cell">
                    <h4>Message</h4>
                    <textarea className="contact-textarea" name="message" rows="8" cols="80" placeholder="* Message" required></textarea>
                </div>

                <div className="small-12 large-3 cell">
                    <h4>Information</h4>
                    <input type="text" name="name"  placeholder="* First and Last Name" required />
                    <input type="email" name="email"  placeholder="* Email Address" required />
                    <button type="submit" name="button" className="button the-contact-form-submit"><span className="text">Send</span><span className="arrow"><img src={buttonArrow} alt=""/></span></button>
                </div>

                </form>

                <div className="thank-you">
                    <div className="wrap">
                    <h2>Thanks, we'll get back to you soon!</h2>
                    </div>
                </div>

                </div>
                </div>
            </div>

            </section>

            <section id="footer">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                <div className="medium-12 large-3 cell">
                    <div className="wrap">
                    <h3>GrandWorks</h3>
                    </div>
                </div>
                <div className="medium-12 large-3 cell">
                    <div className="wrap">
                    <h4>&copy;&nbsp;2019</h4>
                    </div>
                </div>
                <div className="large-3 medium-12 cell hide-for-small-only">
                    <div className="wrap">

                    </div>
                </div>
                <div className="large-3 medium-12 cell">
                    <div className="wrap mail">
                    <a href="mailto:hello@grandworks.co"><h4>Send us an email</h4></a>
                    </div>
                </div>
                </div>
            </div>
            </section>

      </footer>
        
    
    );
}

export default Footer;
