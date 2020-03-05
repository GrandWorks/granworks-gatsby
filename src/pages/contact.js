import React from 'react';
import Layout from '../components/layout'
import arrowButton from '../../static/button-arrow.svg'
const contact = () => {
    return (
        <Layout>
            <section id="intro-contact" class="contact-page">
                <div class="grid-container">
                <div class="grid-x grid-padding-x">
                <div class="medium-12 cell">
                    <div class="content">
                        <div class="sub">
                            <p>Need our help?</p>
                        </div>
                        <div class="introducton">
                            <h2>
                                We should talk.<br />
                                Email us at <a href="mailto:hello@grandworks.co" target="_blank">hello@grandworks.co</a><br />
                                or call us at <span><a href="tel:+91 9075295955" class="phone">+91 9075 295 955</a></span>
                            </h2>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
            <section id="contact-text">
                <div class="grid-container">
                <div class="grid-x grid-padding-x">
                <div class="large-6 cell">
                    <h4>WANT TO MEET UP?</h4>
                    <p>We’re a remote team, working out of different locations such as India, Sweden, Hong Kong, Japan, Thailand and more. Feel free to contact us for a meeting.</p>

                    <h4>Company</h4>

                    <p>GrandWorks is a brand name of Mungozone Web Solutions LLP. LLP Identification Number: AAB-1685.</p>

                </div>
                <div class="large-6 cell">
                    <h4>OFFICE ADDRESS</h4>
                    <p>GrandWorks,<br/>
                    1085, Shangrila, Segundo Bairo,<br/>
                    Santa Cruz, Tiswadi, Goa, India. 403005</p>
                    <h4>REGISTERED ADDRESS</h4>
                    <p>Chamber 2, SH 16/46, Ashok Bhawan,<br/>
                    Kadipur, Shivpur, Varanasi, UP, India. 221003.
                    </p>
                </div>
                </div>
                </div>
            </section>
            
            <style media="screen" dangerouslySetInnerHTML={{__html: `
                    #contact-form {display: none;}
                    #contact-form.contact-page-form {display: block;}
            `}} />
            <section id="contact-form" class="contact-page-form">
                <div class="grid-container">
                    <div>
                        <div class="form-wrap">

                            <form action="" method="POST" class="grid-x grid-padding-x the-contact-form">
                                <div class="small-12 large-9 cell">
                                    <h4>Message</h4>
                                    <textarea class="contact-textarea" name="message" rows="8" cols="80" placeholder="* Message" required></textarea>
                                </div>

                                <div class="small-12 large-3 cell">
                                    <h4>Information</h4>
                                    <input type="text" name="name" value="" placeholder="* First and Last Name" required />
                                    <input type="email" name="email" value="" placeholder="* Email Address" required />
                                    <button type="submit" name="button" class="button the-contact-form-submit"><span class="text">Send</span><span class="arrow"><img src={arrowButton} alt=""/></span></button>
                                </div>

                            </form>

                            <div class="thank-you">
                                <div class="wrap">
                                <h2>Thanks, we'll get back to you soon!</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default contact;
