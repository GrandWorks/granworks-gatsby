import React,{Component} from 'react';
import Layout from '../../components/layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import phone from '../../../static/case-studies/archive/phone.png'
import oxygenosOne from '../../../static/case-studies/archive/oxygenos1.png'
import oxygenosTwo from '../../../static/case-studies/archive/oxygenos2.png'
import oxygenosThree from '../../../static/case-studies/archive/oxygenos3.png'
import upcloudOne from '../../../static/case-studies/archive/upcloud1.jpg'
import upcloudTwo from '../../../static/case-studies/archive/upcloud2.jpg'
import onPlusTv from '../../../static/case-studies/archive/oneplustv.png'
import animationVideo from '../../../static/case-studies/archive/animation.mp4'
import droneGIF from '../../../static/case-studies/digitalsky/drone.gif'


export class CaseStudies extends Component {
    render() {
        return (
            <Layout location={this.props.location} extraClassNames="page-template-template-case-studies">
                <style dangerouslySetInnerHTML={{__html: `
                    #page-title text {font-size: 17px;}
                `}} />
                <div id="page-title">
                    <svg viewBox="0 0 61 16">
                        <text x="50%" y="14" textAnchor="middle">WORKS</text>
                    </svg>
                </div>
                <section id="case-studies-content">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                        <div className="medium-12 cell">
                            <h2>A collection of our recent work</h2>

                            <AniLink bg="#EB0029" direction="right" cover duration={0.8} to={"/case-studies/oneplus"} >
                                <div className="works-wrap">
                                    <div className="work left oneplus">
                                    <div className="grid-x grid-padding-x">
                                    <div className="medium-5 cell description small-order-2 medium-order-1 large-order-1">
                                        <div className="wrap">
                                            <h4>Wallpapers</h4>
                                            <h3>OnePlus</h3>
                                            <p>Our founder Hampus has made <br />the official wallpapers for OnePlus <br />smartphones since early 2015.</p>
                                        </div>
                                    </div>
                                    <div className="medium-7 cell small-order-1 medium-order-2 large-order-2">
                                        <div className="phone">
                                        <img src={phone} alt="" />
                                        </div>
                                    </div>
                                    </div>

                                    <div className="wallpaper"></div>
                                    {/* <svg>
                                        <filter id="turbulence" x="0" y="0" width="100%" height="100%">
                                        <feTurbulence id="sea-filter" numOctaves="1" seed="1" baseFrequency="0.01" type="fractalNoise"></feTurbulence>
                                        <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
                                        <animate href="#sea-filter" attributeName="baseFrequency" dur="60s"
                                        keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
                                        </filter>
                                    </svg> */}

                                    </div>
                                </div>
                            </AniLink>



                            <AniLink bg="#EB0029" direction="right" cover duration={0.8} to={"/case-studies/oxygen-os"}>
                                <div className="works-wrap">
                                    <div className="work right oxygenos">
                                    <div className="grid-x grid-padding-x">
                                    <div className="medium-7 cell">
                                        <div className="art">
                                        <img className="art1" src={oxygenosOne} alt="" />
                                        <img className="art2" src={oxygenosTwo} alt="" />
                                        <img className="art3" src={oxygenosThree} alt="" />
                                        </div>
                                    </div>
                                    <div className="medium-5 cell description">
                                        <div className="wrap">
                                            <h4>Illustrations</h4>
                                            <h3>Oxygen OS</h3>
                                            <p>OnePlus Zen Mode, Work-Life Mode, <br />Gaming Space are more illustrations <br/>were conceptualized and designed <br />by the GrandWorks.</p>
                                        </div>
                                    </div>

                                    </div>
                                    </div>
                                </div>
                            </AniLink>

                            <AniLink bg="#7B00FF" direction="right" cover duration={0.8} to={"/case-studies/upcloud"}>
                                <div className="works-wrap">
                                    <div className="work left upcloud">
                                    <div className="grid-x grid-padding-x">
                                    <div className="medium-5 cell description small-order-2 medium-order-1 large-order-1">
                                        <div className="wrap">
                                            <h4>WEBSITE DESIGN & DEV</h4>
                                            <h3>UpCloud</h3>
                                            <p>UpCloud is a leading cloud server <br/>provider based in Helsinki, Finland, with <br/>offices all around the world.</p>
                                        </div>
                                    </div>
                                    <div className="medium-7 cell small-order-1 medium-order-2 large-order-2">
                                        <div className="art">
                                        <div className="wrap">
                                            <img className="upcloud1" src={upcloudOne} alt="" />
                                            <img className="upcloud2" src={upcloudTwo} alt="" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </AniLink>

                            <AniLink bg="#312E3F" direction="right" cover duration={0.8} to={"/case-studies/oneplus-tv"}>
                                <div className="works-wrap">
                                    <div className="work right oneplustv">
                                    <div className="grid-x grid-padding-x">
                                    <div className="medium-7 cell">
                                        <div className="art">
                                        <div className="the-tv-wrap">
                                            <img className="the-tv" src={onPlusTv} alt="" />
                                            <div className="the-tv-animation">
                                            <video loop autoPlay>
                                                <source src={animationVideo} type="video/mp4" />
                                            </video>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="medium-5 cell description">
                                        <div className="wrap">
                                            <h4>Art & Animation</h4>
                                            <h3>OnePlus TV</h3>
                                            <p>We created the official artworks for <br/>OnePlus TV, and animations used for the presentation of the TV. </p>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </AniLink>

                            <AniLink bg="#245DFF" direction="right" cover duration={0.8} to={"/case-studies/digitalsky"}>
                                <div className="works-wrap">
                                    <div className="work left digitalsky">
                                    <div className="grid-x grid-padding-x">
                                    <div className="medium-5 cell description small-order-2 medium-order-1 large-order-1">
                                        <div className="wrap">
                                            <h4>WEBSITE DESIGN & DEV</h4>
                                            <h3>DigitalSky</h3>
                                            <p>As an operator, manufacturer or pilot of unmanned aircraft in India, you need to first register yourself on DigitalSky.</p>
                                        </div>
                                    </div>
                                    <div className="medium-7 cell small-order-1 medium-order-2 large-order-2">
                                        <div className="art">
                                        <div className="wrap">
                                            <img src={droneGIF} alt="" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="landscape-animation"></div>
                                    </div>
                                </div>
                            </AniLink>
                        </div>
                        </div>
                    </div>
                    </section>
            </Layout>
        );
    }
}

export default CaseStudies;
