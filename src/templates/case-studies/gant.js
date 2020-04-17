import React from 'react';
import Layout from '../../components/layout';
import RecentWork from '../../components/RecentWork'
import Parallax from 'react-rellax'

const Gant = ({data, pageContext,location}) => {
    return(
        <Layout location={location} extraClassNames="page-template-template-case-studies-gant">
            <div id="page-title">
                <svg viewBox="0 0 61 16">
                    <text x="50%" y="15" textAnchor="middle">GANT</text>
                </svg>
            </div>
            <section id="case-studies-intro">
                <div className="grid-x">
                    <div className="large-6 cell small-order-2 medium-order-2 large-order-1">
                    <div className="case-study-info-wrap">
                        <div className="case-study-info">
                        <h4>TEXTILE PRINTS</h4>
                        <h1>GANT</h1>
                        <h2>Diamond G</h2>
                        <p>Our founder Hampus created abstract designs for the world renowned fashion brand GANT and their collection Diamond G. The textile prints has been made for various apparell and is sold all around the world.</p>
                        </div>
                        <div className="case-study-details-box">

                        <div className="image-box">
                        </div>
                        <div className="details-box">
                            <div className="col">
                            <div className="detail">
                                <h4>CLIENT</h4>
                                <p>GANT - Diamond G</p>
                            </div>

                            <div className="detail">
                                <h4>DELIVERABLES</h4>
                                <p>Textile Prints</p>
                            </div>
                            </div>
                            <div className="col">
                            <div className="detail">
                                <h4>TEAM</h4>
                                <p>Hampus Olsson</p>
                            </div>

                            <div className="detail">
                                <h4>YEAR</h4>
                                <p>2017</p>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>
                    <div className="large-6 cell small-order-1 medium-order-1 large-order-2">
                    <Parallax className="intro-image" speed={-2}>

                    </Parallax>
                    </div>
                </div>
            </section>
            <section id="project-tite-description">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                    <div className="medium-12 cell">
                        <h4>REIMAGINING</h4>
                        <h2>Argyle Patterns for a new Audience</h2>
                    </div>
                    </div>
                </div>
            </section>
            <section id="split-boxes">
                <div className="grid-x">
                    <div className="medium-6 cell">
                    <div className="left-wrap">

                    </div>
                    </div>

                    <div className="medium-6 cell">
                    <div className="right-wrap">

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
                        <h2>Ever repeating patterns</h2>
                        <p>The patterns are repeatable on all sides, making it easy to print on large pieces of fabric. It was a challenge to get the abstract shapes repeating without making it look repeated, but after a lot of work, it worked out just fine!</p>
                    </div>
                    </div>
                </div>
            </section>
            <section id="showcase">
                <div className="grid-x">
                    <div className="medium-6 cell">
                    <div className="left-wrap">
                    </div>
                    </div>

                    <div className="medium-6 cell">
                    <div className="right-wrap">
                    </div>
                    </div>
                </div>
            </section>
            <RecentWork/>
        </Layout>
    );
};

export default Gant;