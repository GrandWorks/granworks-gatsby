import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import RecentWork from '../../components/RecentWork';
import oxygenosOne from '../../../static/case-studies/oxygenos/oxygenos1.jpg'
import oxygenosTwo from '../../../static/case-studies/oxygenos/oxygenos2.jpg'
import oxygenosThree from '../../../static/case-studies/oxygenos/oxygenos3.jpg'
import onBoardingOne from '../../../static/case-studies/oxygenos/onboarding1.png'
import onBoardingTwo from '../../../static/case-studies/oxygenos/onboarding2.png'
import onBoardingThree from '../../../static/case-studies/oxygenos/onboarding3.png'
import workLife from '../../../static/case-studies/oxygenos/work-life.jpg'
import game from '../../../static/case-studies/oxygenos/game.jpg'


class OxygenOs extends React.Component{
    
    constructor(props)
    {
        super(props);

    }

    render(){
        return(
            <Layout extraClassNames="page-template-template-case-studies-oxygen-os">
                <style dangerouslySetInnerHTML={{__html: `
                    #page-title text {font-size: 10.5px;}
                `}} />
                <div id="page-title">
                    <svg viewBox="0 0 61 16">
                        <text x="50%" y="13.8" textAnchor="middle">OXYGEN OS</text>
                    </svg>
                </div>
                <section id="case-studies-intro">
                    <div className="grid-x">
                        <div className="large-6 cell small-order-2 medium-order-2 large-order-1">
                        <div className="case-study-info-wrap">
                            <div className="case-study-info">
                            <h4>Illustrations</h4>
                            <h1>Oxygen OS</h1>
                            <p>We all love stock Android! OnePlus know’s this and wanted to maintain the user experience that they are known for, yet, they wanted to give their passionate fanbase something that added value. Step in OxygenOS!</p>
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
                                    <p>Illustrations</p>
                                </div>
                                </div>
                                <div className="col">
                                <div className="detail">
                                    <h4>TEAM</h4>
                                    <p>Hampus Olsson</p>
                                </div>

                                <div className="detail">
                                    <h4>YEAR</h4>
                                    <p>2017-Ongoing</p>
                                </div>
                                </div>
                            </div>

                            </div>
                        </div>
                        </div>
                        <div className="large-6 cell small-order-1 medium-order-1 large-order-2">
                        <div className="intro-image">
                            <div className="layer1" speed="2"></div>
                            <div className="layer2" speed="-2"></div>
                            <div className="layer3" speed="-4"></div>
                        </div>
                        </div>
                    </div>
                </section>

                <section id="case-studies-content">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="medium-12 cell">
                                <h4>A unified illustration language</h4>
                                <h2>Creating the OnePlus Style</h2>
                                <p>Our lead designer and co-founder Hampus Olsson was given the task to conceptualise and design custom illustrations for OxygenOS. From UX elements to the monk-like calmness or panic-inducing Zen Mode, Hampus illustrated key elements and developed a custom style from the ground up for all their current and upcoming illustrations, working closely with OnePlus to set the benchmark for the future. We are delighted to have been given the opportunity to have a part in the OS at this level.
                                </p>
                                <img className="no-shadow" src={oxygenosOne} alt="" />

                            </div>
                        </div>
                    </div>
                </section>

                <section id="oxygen-fullbg">
                    <div className="wrap">
                    </div>
                </section>

                <section id="case-studies-content">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                        <div className="medium-8 cell">
                            <img className="no-shadow" src={oxygenosTwo} alt="" />
                        </div>
                        <div className="medium-4 cell">
                            <h4>Digital Wellbeing</h4>
                            <h2>Zen Mode</h2>
                            <img className="no-shadow" src={oxygenosThree} alt="" />
                        </div>
                        <div className="medium-12 cell">
                            <p className="no-margin">Since release, the Zen Mode app is being used by millions of people around the world and manages to give people a break from their daily smartphone use. OnePlus approached us to create the illustrations for the app, so we did everything from conceptualizing and ideation to a final design. </p>
                        </div>
                        </div>
                    </div>
                </section>

                <section id="onboarding" className="case-studies-content">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="medium-4 cell">
                                <img className="no-shadow" src={onBoardingOne} alt="" />
                            </div>
                            <div className="medium-4 cell">
                                <img className="no-shadow" src={onBoardingTwo} alt="" />
                            </div>
                            <div className="medium-4 cell">
                                <img className="no-shadow" src={onBoardingThree} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="work-life" className="case-studies-content">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">

                        <div className="medium-6 cell text">
                            <h4>One device, for everything</h4>
                            <h2>Work-Life Balance</h2>
                            <p>With OxygenOS, there's no need to carry around two phones. Simply set up a "Work mode" and "Life mode" to keep your professional life separate from your personal life. We created the illustrations for the onboarding process.</p>
                        </div>
                        <div className="medium-6 cell">
                            <img className="no-shadow" src={workLife} alt="" />
                        </div>

                        <div className="medium-12 cell">
                            <img className="no-shadow" src={game} alt="" />
                        </div>

                        <div className="medium-6 cell">
                            <h4>All your games in one place</h4>
                            <h2>Game Space</h2>
                        </div>
                        <div className="medium-6 cell">
                            <p>In the mood for some gaming? With the Game Space app, you can easily find all your games in one place, without the need to scroll through all your apps. We created all the fun onboarding illustrations Game Space.</p>
                        </div>

                        </div>
                    </div>
                </section>

                <hr></hr>

                <RecentWork/>
                
            </Layout>
        );
            
    }  
};

export default OxygenOs;