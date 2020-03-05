import React, {Component} from 'react';
import Layout from '../../components/layout';
import RecentWork from '../../components/RecentWork'
import theTv from '../../../static/case-studies/oneplus-tv/the-tv.png'
import theTvVideo from '../../../static/case-studies/oneplus-tv/the-tv-video.jpg'
import wallpaperOne from '../../../static/case-studies/oneplus-tv/wallpaper1.jpg'
import wallpaperTwo from '../../../static/case-studies/oneplus-tv/wallpaper2.jpg'
import wallpaperThree from '../../../static/case-studies/oneplus-tv/wallpaper3.jpg'
import animationVideo from '../../../static/case-studies/oneplus-tv/animation.mp4'
import keynote from '../../../static/case-studies/oneplus-tv/keynote.mp4'
class OnePlusTv extends Component {
    constructor(props)
    {
        super(props);
        
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        
        const wallpaper1 = this.refs.wallpaper1;
        const wallpaper2 = this.refs.wallpaper2;
        const wallpaper3 = this.refs.wallpaper3;
        
        if(typeof window != "undefined")
        {
            window.addEventListener("scroll",this.handleScroll);
            wallpaper1.addEventListener("hover",function(){
                wallpaper2.classList.toggle("fade");
                wallpaper3.classList.toggle("fade");
            });
            wallpaper2.addEventListener("hover",function(){
                wallpaper1.classList.toggle("fade");
                wallpaper3.classList.toggle("fade");
            });
            wallpaper3.addEventListener("hover",function(){
                wallpaper2.classList.toggle("fade");
                wallpaper1.classList.toggle("fade");
            });
        }
        
    }

    componentWillUnmount(){
        const wallpaper1 = this.refs.wallpaper1;
        const wallpaper2 = this.refs.wallpaper2;
        const wallpaper3 = this.refs.wallpaper3;
        if(typeof window != "undefined")
        {
            window.removeEventListener("scroll",this.handleScroll);
            wallpaper1.removeEventListener("hover",function(){
                wallpaper2.classList.toggle("fade");
                wallpaper3.classList.toggle("fade");
            });
            wallpaper2.removeEventListener("hover",function(){
                wallpaper1.classList.toggle("fade");
                wallpaper3.classList.toggle("fade");
            });
            wallpaper3.removeEventListener("hover",function(){
                wallpaper2.classList.toggle("fade");
                wallpaper1.classList.toggle("fade");
            });   
        }
    }

    handleScroll = ()=>{
        const theTv = this.refs.theTv;
        var st = document.documentElement.scrollTop || document.body.scrollTop;
        theTv.style.transform = 'scale('+(1+(st*0.0002))+')';
    }

    render(){
        return(
            <Layout extraClassNames="page-template-template-case-studies-oneplus-tv">
                <style dangerouslySetInnerHTML={{__html: `
                    #page-title text {font-size: 9.7px;}
                `}} />
                <div id="page-title">
                    <svg viewBox="0 0 61 16">
                        <text x="50%" y="13.8" textAnchor="middle">ONEPLUS TV</text>
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
                            <div className="the-tv" ref="theTv">
                            <img src={theTv} alt="OnePlus TV" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section id="project-tite-description">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                            <div className="medium-12 cell">
                                <h4>OnePlus TV</h4>
                                <h2>From your phone to the living room</h2>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section id="the-tv-video">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                            <div className="medium-12 cell">
                                <div className="the-tv-video-wrap">
                                <img src={theTvVideo} alt="OnePlus TV" />
                                <div className="intro-animation">
                                    <video loop autoPlay>
                                        <source src={animationVideo} type="video/mp4" />
                                    </video>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section id="case-studies-content">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                            <div className="medium-12 cell">
                                <p>OnePlus reached out to our co-founder, Hampus Olsson who has an ongoing relationship with them designing their wallpapers to be part of the next milestone in their company, the OnePlus TV. Hampus designed the artworks for the packaging, artwork for the TV software and animations for the keynote event. The artwork follows the natural evolution that Hampus has displayed consistently through the years, albeit for a much larger canvas.</p>

                                <div className="huge-resolution">
                                <div className="title">
                                    <h2>Huge <br/>Resolution</h2>
                                </div>
                                <div className="wallpaper wallpaper1" ref="wallpaper1">
                                    <img src={wallpaperOne} alt="" />
                                </div>
                                <div className="wallpaper wallpaper2" ref="wallpaper2">
                                    <img src={wallpaperTwo} alt="" />
                                </div>
                                <div className="wallpaper wallpaper3" ref="wallpaper3">
                                    <img src={wallpaperThree} alt="" />
                                </div>

                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    <section id="big-stage">
                        <video loop autoPlay>
                            <source src={keynote} type="video/mp4" />
                        </video>
                    </section>
                    <section id="case-studies-content">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                            <div className="medium-12 cell">
                                <h2>On the big stage</h2>
                                <p>The artworks we created was presented on stage together with a looping animation created in full 8K resolution which was rendered using Blender, using a single RTX 2080 GPU in Cycles.</p>
                            </div>
                            </div>
                        </div>
                    </section>
                    <RecentWork/>
            </Layout>
            
        );
    }
};

export default OnePlusTv;