import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import RecentWork from '../../components/RecentWork';
import arrowRight from '../../../static/arrow-right-w.svg'
import splitOne from '../../../static/case-studies/upcloud/split1.jpg'
import splitTwo from '../../../static/case-studies/upcloud/split2.jpg'
import pricing from '../../../static/case-studies/upcloud/pricing.mp4'
import menu from '../../../static/case-studies/upcloud/menu.mp4'
import Parallax from 'react-rellax'
class Upcloud extends React.Component {

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        const sitePreview = this.refs.sitePreview;
        if(typeof window != "undefined")
        {
            window.addEventListener("scroll",function(){
            var st = document.documentElement.scrollTop || document.body.scrollTop;;
            sitePreview.style.backgroundPosition = 'top calc(-'+(st*1.2)+'px) center';
            });
        }
        
    }

    componentWillUnmount()
    {
        const sitePreview = this.refs.sitePreview;
        if(typeof window != "undefined")
        {
           window.addEventListener("scroll",function(){
            var st = document.documentElement.scrollTop || document.body.scrollTop;;
            sitePreview.style.backgroundPosition = 'top calc(-'+(st*1.2)+'px) center';
            }); 
        }
        
    }

    render(){
        return(
            <Layout location={this.props.location} extraClassNames="page-template-template-case-studies-upcloud">
                 <style dangerouslySetInnerHTML={{__html: `
                    #page-title text {font-size: 13px;}
                `}} />
                <div id="page-title">
                    <svg viewBox="0 0 61 16">
                        <text x="50%" y="14" textAnchor="middle">UPCLOUD</text>
                    </svg>
                </div>
                <section id="case-studies-intro">
                    <div class="grid-x">
                        <div class="large-6 cell small-order-2 medium-order-2 large-order-1">
                        <div class="case-study-info-wrap">
                            <div class="case-study-info">
                            <h4>WEBSITE DESIGN & DEV</h4>
                            <h1>UpCloud</h1>
                            <p>UpCloud is a leading cloud server provider based in Helsinki, Finland, with offices all around the world. We created their shining new website design and developed it from the ground up in WordPress. </p>
                            </div>
                            <div class="case-study-details-box">

                            <div class="image-box">
                            </div>
                            <div class="details-box">
                                <div class="col">
                                <div class="detail">
                                    <h4>CLIENT</h4>
                                    <p>UpCloud</p>
                                </div>

                                <div class="detail">
                                    <h4>DELIVERABLES</h4>
                                    <p>Website design & dev</p>
                                </div>
                                </div>
                                <div class="col">
                                <div class="detail">
                                    <h4>YEAR</h4>
                                    <p>2018</p>
                                </div>

                                <div class="detail">
                                    <a class="button small" href="https://upcloud.com" target="_blank">Visit <img src={arrowRight} alt="" /></a>
                                </div>
                                </div>
                            </div>

                            </div>
                        </div>
                        </div>
                        <div class="large-6 cell small-order-1 medium-order-1 large-order-2">
                        <div class="intro-image">
                            <div class="upcloud-cable"></div>

                            <div class="site-preview-wrap">
                            <div class="site-preview" ref="sitePreview"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section id="project-tite-description">
                    <div class="grid-container">
                        <div class="grid-x grid-padding-x">
                        <div class="medium-12 cell">
                            <h4>NEVER BECOME YET ANOTHER</h4>
                            <h2>Stay Ahead of the Competition</h2>
                        </div>
                        </div>
                    </div>
                </section>
                <section id="split-boxes">
                    <div class="grid-x">
                        <Parallax class="small-6 cell" speed={0}>
                            <div class="left-wrap">
                                <img src={splitOne} alt="" />
                            </div>
                        </Parallax>

                        <Parallax class="small-6 cell" speed={0.5}>
                            <div class="right-wrap">
                                <img src={splitTwo} alt="" />
                            </div>
                        </Parallax>
                    </div>
                </section>
                <section id="gant-images">
                    <div class="grid-x">
                        <div class="medium-3 cell"><div class="box box1"></div></div>
                        <div class="medium-3 cell"><div class="box box2"></div></div>
                        <div class="medium-3 cell"><div class="box box3"></div></div>
                        <div class="medium-3 cell"><div class="box box4"></div></div>
                    </div>
                </section>
                <section id="case-studies-content">
                    <div class="grid-container">
                        <div class="grid-x grid-padding-x">
                        <div class="medium-12 cell">
                            <h2>Effective Interaction</h2>
                            <p>We made sure to implement subtle but effective interaction elements throughout the website to complement the design. For example, when navigating the pricing section, we give users the option to choose between simple and flexible pricing options in an intuitive way.</p>
                            {/* <!-- <img src="<?php echo get_template_directory_uri(); ?>/img/case-studies/upcloud/dummy.png" alt=""> --> */}

                            <video loop autoPlay muted>
                                <source src={pricing} type="video/mp4" />
                            </video>


                            <h2>From Wireframe to Final Product</h2>
                        </div>
                        <div class="medium-8 cell">
                            <p>The project started with us gathering ideas and requirements from the team at UpCloud, a prominent player in the global cloud hosting market, based in Helsinki, Finland. They wanted a complete rehaul of the website, making sure the new version had a contemporary feel. They also wanted to build a community platform where users could publish articles, tutorials and more. The team at UpCloud also wanted to showcase their new products innovatively. </p>
                        </div>
                        <div class="medium-4 cell">
                            <div class="small-cables" data-sal="slide-left" data-sal-easing="easeOutCubic">
                            </div>
                        </div>

                        <div class="medium-12">
                            {/* <!-- <img src="<?php echo get_template_directory_uri(); ?>/img/case-studies/upcloud/screenshot1.jpg" alt=""> --> */}

                            <video loop autoPlay muted>
                                <source src={menu} type="video/mp4" />
                            </video>

                            <p>We rebuilt the website from the ground up, adding a plethora of products that UpCloud offered with detailed pricing and laid the foundations for the community to grow. While at the same time making the website as user friendly as possible. </p>
                        </div>
                        </div>
                    </div>
                </section>
                <section id="upcloud-casestudies-fullbg">
                    <div class="wrap">
                    </div>
                </section>
                <section id="case-studies-content">
                    <div class="grid-container">
                        <div class="grid-x grid-padding-x">
                        <div class="medium-12 cell">

                            <h2>An Action Packed Community</h2>
                            <p>We developed a full fledged community for users to share tutorials, resources, stories and events.
                    We made it easy for UpCloud to manage the whole community, and developed an easy way for their users to contribute and earn credits.</p>
                            <img class="no-shadow no-margin" src="../../../case-studies/upcloud/screenshot2.jpg" alt="" />


                        </div>
                        </div>
                    </div>
                </section>
                <RecentWork/>
            </Layout>
        );
    }
};

export default Upcloud;