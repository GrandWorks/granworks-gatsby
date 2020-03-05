import React, {Component} from 'react'
import Layout from '../../components/layout'
import RecentWork from '../../components/RecentWork'
import splitOne from '../../../static/case-studies/oneplus/split1.jpg'
import splitTwo from '../../../static/case-studies/oneplus/split2.jpg'
import w1 from '../../../static/case-studies/oneplus/w1.jpg'
import w2 from '../../../static/case-studies/oneplus/w2.jpg'
import w3 from '../../../static/case-studies/oneplus/w3.jpg'
import w4 from '../../../static/case-studies/oneplus/w4.jpg'
import w5 from '../../../static/case-studies/oneplus/w5.jpg'
import w6 from '../../../static/case-studies/oneplus/w6.jpg'
import w7 from '../../../static/case-studies/oneplus/w7.jpg'
import w8 from '../../../static/case-studies/oneplus/w8.jpg'
import w9 from '../../../static/case-studies/oneplus/w9.jpg'

class OnePlus extends Component{
    constructor(props)
    {
        super(props);

    }
render(){
        return(
            <Layout extraClassNames="page-template-template-case-studies-oneplus">
                <style dangerouslySetInnerHTML={{__html: `
                    #page-title text {font-size: 13px;}
                `}} />
                <div id="page-title">
                    <svg viewBox="0 0 61 16">
                        <text x="50%" y="14" textAnchor="middle">ONEPLUS</text>
                    </svg>
                </div>
                <section id="case-studies-intro">
                    <div className="grid-x">
                        <div className="large-6 cell small-order-2 medium-order-2 large-order-1">
                        <div className="case-study-info-wrap">
                            <div className="case-study-info">
                            <h4>WALLPAPERS</h4>
                            <h1>OnePlus</h1>
                            <p>Hampus has designed the official wallpapers for OnePlus since their second phone OnePlus 2. He has designed wallpapers for over nine models so far.
                    Hampus art is created using both traditional and digital methods.</p>
                            </div>
                            <div className="case-study-details-box">

                            <div className="image-box">
                            </div>
                            <div className="details-box">
                                <div className="col">
                                <div className="detail">
                                    <h4>CLIENT</h4>
                                    <p>OnePlus</p>
                                </div>

                                <div className="detail">
                                    <h4>DELIVERABLES</h4>
                                    <p>Wallpapers</p>
                                </div>
                                </div>
                                <div className="col">
                                <div className="detail">
                                    <h4>TEAM</h4>
                                    <p>Hampus Olsson</p>
                                </div>

                                <div className="detail">
                                    <h4>YEAR</h4>
                                    <p>2015-Ongoing</p>
                                </div>
                                </div>
                            </div>

                            </div>
                        </div>
                        </div>
                        <div className="large-6 cell small-order-1 medium-order-1 large-order-2">
                        <div className="intro-image">
                            <div className="phone-front"></div>
                            <div className="phone-back"></div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section id="project-tite-description">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                            <div className="medium-12 cell">
                                <h4>Never Settle</h4>
                                <h2>A Mix of Abstract Simplicity</h2>
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

                            <div className="small-6 cell" >
                                <div className="right-wrap">
                                    <img src={splitTwo} alt="" />
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
                                <h2>How did it all begin?</h2>
                                    <p>When I met the founder of OnePlus, Carl Pei in India, we talked about how fun it would be if I could help out making wallpapers for the new OnePlus 2. It went really well, and I’m still making wallpapers for OnePlus today. The community behind OnePlus is amazing and I’m getting a lot of love and support from the fans and community behind OnePlus.
                                    <br/>
                                    <strong>- Hampus Olsson, Founder of GrandWorks.</strong>
                                    <a href="#" className="button">Get the wallpapers</a>
                                </p>

                            </div>
                            <div className="small-4 cell wallpapers">
                                <img src={w1} alt="" />
                                <img src={w4} alt="" />
                                <img src={w7} alt="" />
                            </div>
                            <div className="small-4 cell wallpapers">
                                <img src={w2} alt="" />
                                <img src={w5} alt="" />
                                <img src={w8} alt="" />
                            </div>
                            <div className="small-4 cell wallpapers">
                                <img src={w3} alt="" />
                                <img src={w6} alt="" />
                                <img src={w9} alt="" />
                            </div>


                            </div>
                        </div>
                    </section>
                    <RecentWork/>
            </Layout>
        );
    };
};

export default OnePlus;
