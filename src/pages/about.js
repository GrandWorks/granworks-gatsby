import React, { Component } from 'react';
import Layout from '../components/layout'
import heartSvg from '../../static/heart.svg'
import digitaSpace from '../../static/digitalspace.svg'
import gantLogo from '../../static/logos/Spotify.png'
import spotify from '../../static/logos/Spotify.png'
import onePlus from '../../static/logos/OnePlus.png'
import indiaStack from '../../static/logos/indiastack.png'
import dalberg from '../../static/logos/dalberg.png'
import aby from '../../static/team/aby.jpg'
import aishwarya from '../../static/team/aishwarya.jpg'
import cedan from '../../static/team/cedan.jpg'
import hampus from '../../static/team/hampus.jpg'
import hire from '../../static/team/hire.jpg'
import kimberly from '../../static/team/kimberly.jpg'
import krishna from '../../static/team/krishna.jpg'
import prashant from '../../static/team/prashant.jpg'
import prateek from '../../static/team/prateek.jpg'
import sidd from '../../static/team/sidd.jpg'
import silverio from '../../static/team/silverio.jpg'
import snehal from '../../static/team/snehal.jpg'
import wazid from '../../static/team/wazid.jpg'
export class About extends Component {
    render() {
        return (
            <Layout extraClassNames="page-template-template-about" location={this.props.location}>
                <style dangerouslySetInnerHTML={{__html: `
                    #page-title text {font-size: 16px;}
                `}} />
                <div id="page-title">
                    <svg viewBox="0 0 61 16">
                        <text x="50%" y="15" text-anchor="middle">STUDIO</text>
                    </svg>
                </div>
                <section id="about-intro">
                    <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                    <div class="medium-12 cell">
                        <div class="content">
                        <div class="sub">
                            <p><img src={heartSvg} alt="" />Let’s be friends!</p>
                        </div>
                        <div class="introducton" data-sal="flip-right" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="200">
                            <h2>We’re a passionate group who loves to create something better for the world we live in.</h2>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
                <section id="about">
                    <div class="grid-container">
                        <div class="grid-x grid-padding-x">
                            <div class="large-6 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="200">
                                <h4>CULTURE</h4>
                                <p>Our team works internationally and remotely. Our office is based out of beautiful Goa, India. We retain strong ties to Scandinavia and want to bring the open working culture to India. We are a fun and adventurous group who likes new challenges!</p>
                            </div>
                            <div class="large-6 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="200">
                                <h4>CLIENTS</h4>
                                <p>We like to retain long-lasting relationships with a selected
                        group of clients, where we can grow together to reach new goals.
                        Aiming for the highest quality work, while preparing for the future.</p>
                            </div>
                            <div class="large-12 cell selected-clients selected-clients-logos">
                                <h4>Selected Clients</h4>
                                <div class="large-12 cell">
                                <div class="logo-wrap">
                                    <ul>
                                        <li><img src={spotify} alt=""/></li>
                                        <li><img src={onePlus} alt=""/></li>
                                        <li><img src={gantLogo} alt=""/></li>
                                        <li><img src={indiaStack} alt=""/></li>
                                        <li><img src={dalberg} alt=""/></li>
                                    </ul>
                                </div>
                                </div>

                            </div>
                    </div>
                    </div>
                </section>
                <section id="our-services">
                    <div class="grid-container">
                        <div class="grid-x grid-padding-x">
                        <div class="large-12 cell">
                            <h2>Some of the services we offer</h2>
                        </div>

                        <div class="large-12 cell">
                            <div class="service-wrap odd one">
                            <h4>Trusted by large businesses and governments</h4>
                            <h3>Design & Illustration</h3>
                            <p>Our design team has over 10 years of professional knowledge and has worked for and with leading companies in the US, Scandinavia, India, China and other parts of the world. We work with some of the most influential companies today who like to set the trends for others to follow.</p>
                            </div>
                        </div>

                        <div class="large-12 cell">
                            <div class="service-wrap two">
                            <h4>We specialize in</h4>
                            <h3>Wordpress Development</h3>
                            <p>Our team specializes in WordPress as a platform for your company to grow. We actively contribute to the WordPress platform and manage events and lectures on the topic. We optimize Wordpress sites and tailor-make it to fit your needs while keeping the platform safe for your company.</p>
                            </div>
                        </div>

                        <div class="large-12 cell">
                            <div class="service-wrap odd three">
                            <h4>Secure and versatile</h4>
                            <h3>Websites & Apps</h3>
                            <p>Rest assured, we follow you all the way from start to finish and will make sure you know what we are doing. Our team has delivered everything from large portals to high fashion brand websites. We know where things can go wrong and how to solve it, for optimal scaling.</p>
                            </div>
                        </div>

                        <div class="large-12 cell">
                            <div class="service-wrap four">
                            <h4>Tailor made solutions for</h4>
                            <h3>E-commerce</h3>
                            <p>We have worked with some of the largest e-commerce websites in Scandinavia, and know how to integrate the best solution for your products, together with the best payment solution tailor-made for your consumers. We know everything from taking the best product photos to creating campaigns.</p>
                            </div>
                        </div>

                        </div>
                    </div>
                </section>
                <section id="grand-team">
                    <div class="pattern rellax" data-rellax-speed="2"></div>
                    <div class="grid-container">
                        <div>
                        <div class="grid-x grid-padding-x">
                            <div class="large-12 cell">
                            <h2 class="title" data-sal="slide-up" data-sal-duration="300" data-sal-easing="easeOutCirc">The Grand Team</h2>
                            </div>

                            <div class="large-6 medium-6 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc">
                            <div class="image">
                                <img src={hampus} alt="" />
                            </div>
                            <div class="details">
                                <h3>Hampus Olsson</h3>
                                <h4>CO-FOUNDER & DESIGN LEAD</h4>
                            </div>
                            </div>

                            <div class="large-6 medium-6 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="200">
                            <div class="image">
                                <img src={sidd} alt="" />
                            </div>
                            <div class="details">
                                <h3>Siddharth Ashok</h3>
                                <h4>CO-FOUNDER & TECH LEAD</h4>
                            </div>
                            </div>

                            <div class="large-4 medium-4 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="100">
                            <div class="image">
                                <img src={kimberly} alt="" />
                            </div>
                            <div class="details">
                                <h3>Kimberley do Rego</h3>
                                <h4>Designer</h4>
                            </div>
                            </div>

                            <div class="large-4 medium-4 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="300">
                            <div class="image">
                                <img src={wazid} alt="" />
                            </div>
                            <div class="details">
                                <h3>Wazid Shah</h3>
                                <h4>Web Developer</h4>
                            </div>
                            </div>

                            <div class="large-4 medium-4 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="500">
                            <div class="image">
                                <img src={krishna} alt="" />
                            </div>
                            <div class="details">
                                <h3>Krishna Biradar</h3>
                                <h4>Senior Full Stack Developer</h4>
                            </div>
                            </div>

                            <div class="large-4 medium-4 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="100">
                            <div class="image">
                                <img src={cedan} alt="" />
                            </div>
                            <div class="details">
                                <h3>Cedan Misquith</h3>
                                <h4>iOS Developer</h4>
                            </div>
                            </div>

                            <div class="large-4 medium-4 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="300">
                            <div class="image">
                                <img src={snehal} alt="" />
                            </div>
                            <div class="details">
                                <h3>Snehal Chibde</h3>
                                <h4>Front-End Developer</h4>
                            </div>
                            </div>

                            <div class="large-4 medium-4 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="500">
                            <div class="image">
                                <img src={aishwarya} alt="" />
                            </div>
                            <div class="details">
                                <h3>Aishwarya Rivonker</h3>
                                <h4>Digital Marketing Executive</h4>
                            </div>
                            </div>

                            <div class="large-4 medium-4 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="100">
                            <div class="image">
                                <img src={prashant} alt="" />
                            </div>
                            <div class="details">
                                <h3>Prashant Kumar</h3>
                                <h4>Quality Analyst</h4>
                            </div>
                            </div>

                            <div class="large-4 medium-4 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="300">
                            <div class="image">
                                <img src={aby} alt="" />
                            </div>
                            <div class="details">
                                <h3>Abhishek Prabhu</h3>
                                <h4>Senior Developer</h4>
                            </div>
                            </div>

                            <div class="large-4 medium-4 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc" data-sal-delay="500">
                            <div class="image">
                                <img src={hire} alt="" />
                            </div>
                            <div class="details">
                                <h3>We are hiring!</h3>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
                </section>
                <section id="talent">
                    <div class="grid-container" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc">
                        <div>
                        <div class="grid-x grid-padding-x">
                            <div class="large-12 cell">
                            <h2 class="title">We’re looking for exceptional talent</h2>
                            </div>
                            <div class="large-6 cell">
                            <p>Do you want to take responsibility for grand projects and manage your own time for best productivity and best result?
                            Are you bored of the nine-to-five lifestyle?
                            </p>
                            </div>
                            <div class="large-6 cell">
                            <p>If you are a Project Manager, Developer or Designer who have at least 5+ years of experience in your field, and feel that you want to work on new exciting projects, feel free to apply now.</p>
                            </div>
                            <div class="large-3 cell" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeOutCirc">
                            <a href="#contact-form" class="button">Apply Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section id="about-us-images">

                </section>
            </Layout>
        );
    }
}

export default About;
