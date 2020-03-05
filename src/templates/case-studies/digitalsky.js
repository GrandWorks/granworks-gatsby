import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import RecentWork from '../../components/RecentWork'
import arrowRight from '../../../static/arrow-right-w.svg'
import droneGIF from '../../../static/case-studies/digitalsky/drone.gif'
import splitOne from '../../../static/case-studies/digitalsky/split1.png'
import digitalskyApp from '../../../static/case-studies/digitalsky/digitalsky-app.png'
import mobileFirst from '../../../static/case-studies/digitalsky/mobile-first.jpg'

class DigitalSky extends React.Component {

    constructor(props)
    {
        super(props);
        // this.rightWrap = React.createRef();
        
    }

    componentDidMount(){
        const rightWrapRef = this.refs.rightWrap;
        if(typeof window != "undefined")
        {
           window.addEventListener("scroll",function () {
            var st = document.documentElement.scrollTop || document.body.scrollTop;
            rightWrapRef.style.backgroundPosition='top calc(-'+(st*0.4)+'px) center';
            }); 
        }

        
    }

    componentWillUnmount(){
        const rightWrapRef = this.refs.rightWrap;
        if(typeof window != "undefined")
        {
           window.removeEventListener("scroll",function () {
            var st = document.documentElement.scrollTop || document.body.scrollTop;
            rightWrapRef.style.backgroundPosition='top calc(-'+(st*0.4)+'px) center';
            }); 
        }
        
    }

render(){
    return(
        <Layout extraClassNames="page-template-template-case-studies-digitalsky">
            <style dangerouslySetInnerHTML={{__html: `
                #page-title text {font-size: 11px;}
            `}} />
            <div id="page-title">
                <svg viewBox="0 0 61 16">
                    <text x="50%" y="13" textAnchor="middle">DIGITALSKY</text>
                </svg>
            </div>
            <section id="case-studies-intro">
                    <div className="grid-x">
                        <div className="large-6 cell small-order-2 medium-order-2 large-order-1">
                        <div className="case-study-info-wrap">
                            <div className="case-study-info">
                            <h4>WEBSITE DESIGN & FRONT-END DEV</h4>
                            <h1>DigitalSky</h1>
                            <p>As an operator, manufacturer or pilot of unmanned aircraft in India,
                    you need to first register yourself on DigitalSky to apply to fly. We are honored to have delivered this important project for DGCA.</p>
                            </div>
                            <div className="case-study-details-box">

                            <div className="image-box">
                            </div>
                            <div className="details-box">
                                <div className="col">
                                <div className="detail">
                                    <h4>CLIENT</h4>
                                    <p>DGCA, Gov. of India</p>
                                </div>

                                <div className="detail">
                                    <h4>DELIVERABLES</h4>
                                    <p>Website design & dev</p>
                                </div>
                                </div>
                                <div className="col">
                                <div className="detail">
                                    <h4>YEAR</h4>
                                    <p>2018</p>
                                </div>

                                <div className="detail">
                                    <a className="button small" href="https://digitalsky.dgca.gov.in/" target="_blank">Visit <img src={arrowRight} alt="" />
                                    </a>
                                </div>
                                </div>
                            </div>

                            </div>
                        </div>
                        </div>
                        <div className="large-6 cell small-order-1 medium-order-1 large-order-2">
                        <div className="intro-image">
                            <div className="illustrations">
                            <img src={droneGIF} alt="" />
                            </div>
                        </div>
                        </div>

                        <div className="landscape-animation"></div>
                    </div>
            </section>
            <section id="project-tite-description">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                    <div className="medium-12 cell">
                        <h4>We got the important task of creating</h4>
                        <h2>The Official Portal for India’s Drones</h2>
                    </div>
                    </div>
                </div>
            </section>
            <section id="split-boxes">
                <div className="grid-x">
                    <div className="small-6 cell">
                        <div className="left-wrap">
                            <img src={splitOne} alt="" />
                        </div>
                    </div>

                    <div className="small-6 cell rellax">
                        <div className="right-wrap" ref="rightWrap">
                        </div>
                    </div>
                </div>
            </section>
            <section id="gant-images">
                <div className="grid-x">
                    <div className="medium-3 cell"><div className="box box1"></div></div>
                    <div className="medium-3 cell"><div className="box box2"></div></div>
                    <div className="medium-3 cell"><div className="box box3"></div></div>
                    <div className="medium-3 cell"><div className="box box4"></div></div>
                </div>
            </section>
            <section id="case-studies-content">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                    <div className="medium-12 cell">
                        <h2>Mobile First</h2>
                        <p>We designed DigitalSky to be mobile first, to enable everyone with a smartphone to register for their license. The website works similarly to an app, but without the need to download, hence making it easy
                for everyone to use the service. </p>

                <p>We worked hard on delivering an intuitive user interface and UX flow which India can be proud of.
                We see this as a step towards innovating in the space surrounding Government websites in India.</p>
                        <img src={mobileFirst} alt="" />

                        <h2>Translating a Policy</h2>
                        <p>We created DigitalSky from the ground up, using the policy document provided by the Gov. of India.
                We translated the policy document into a working website, with simple instruction, natural language, and interaction elements, to make it accessible to everyone.</p>

                <img className="no-shadow" src={digitalskyApp} alt="" />


                    </div>
                    </div>
                </div>
            </section>
            <RecentWork/>
        </Layout>
    );
}
};

export default DigitalSky;