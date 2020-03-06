import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ReactFitText from "react-fittext"
import Masonry from 'react-masonry-css'

import RecentWork from '../components/RecentWork'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import digitaSpace from '../../static/digitalspace.svg'
import gantLogo from '../../static/logos/Spotify.png'
import spotify from '../../static/logos/Spotify.png'
import onePlus from '../../static/logos/OnePlus.png'
import indiaStack from '../../static/logos/indiastack.png'
import dalberg from '../../static/logos/dalberg.png'
import tempImage from '../../static/temp/t.png'
class IndexPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      instagramFeeds:[],
      twitterFeeds:[],
      postFeeds:[],
      instagramCount : 0,
      isFetching:true
    }

    this.renderTweet = this.renderTweet.bind(this);
    this.renderInstagram = this.renderInstagram.bind(this);
  }

  componentDidMount(){
    fetch("http://localhost/grandworks-live/wp-json/grandfeed/feeds")
    .then(res=>res.json())
    .then(result=>{
      this.setState({...this.state,instagramFeeds:[...result.insta_feeds], twitterFeeds:[...result.tweets], postFeeds:[...result.posts]},
        ()=>{
          this.setState({isFetching:false})
        }
      )
    });
  }

  getMonth(month)
  {
    const months = ["JAN","FAB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    return months[month];
  }

  renderTweet(index)
  {
    const tweet = this.state.twitterFeeds;
    if(tweet.length > 0)
    {
      const date = new Date(tweet[index].tweet_date);
      return (
        <div class="large-6 medium-6 cell item twitter" >
          <a href={tweet[index].tweet_url} target="_blank">
            <div class="wrap">
                <div class="date"><h4>{date.getDate() + " "+ this.getMonth(date.getMonth())+" "+ date.getFullYear()}</h4></div>
                <div class="tweet">
                  <p class="big">{tweet[index].tweet_text}</p>
                </div>
              </div>
          </a>
        </div>

      )
    }
    
  }

  renderInstagram(type="single",index=0)
  {
      const instagram = this.state.instagramFeeds;
      console.log("running");
      if(this.state.isFetching==false){
        if(type=="double")
        {
          return(
              <div class="large-6 medium-6 cell item two-blocks">

              <div class="grid-x grid-padding-x">

                <div class="large-6 medium-6 cell instagram">
                  <a href={instagram[index].feed_url} target="_blank">

                    <div class="wrap" style={{backgroundImage:`url(${instagram[index].image_url})`}}>

                      <img src={tempImage} alt="" />

                    </div>

                  </a>

                </div>



                <div class="large-6 medium-6 cell instagram">

                  <a href={instagram[index+1].feed_url} target="_blank">

                    <div class="wrap" style={{backgroundImage:`url(${instagram[index+1].image_url})`}}>

                      <img src={tempImage} alt="" />

                    </div>

                  </a>

                </div>

              </div>

            </div>
          )
        }
        else
        {
          return(
              <div class="large-6 medium-6 cell item instagram">

                <a href={instagram[index+1].feed_url} target="_blank">

                  <div class="wrap" style={{backgroundImage:`url(${instagram[index+1].image_url})`}}>

                    <img src={tempImage} alt="" />

                  </div>

                </a>

              </div>

          );
        }
      }
  }

  renderPost(index)
  {
    const posts = this.state.postFeeds;
    if(this.state.isFetching!=true)
    {
      return(
        <div class="large-6 medium-6 cell item blog">
          <a href={posts[index].post_url}>
            <div class="wrap">

              <div class="image">

                <img src={posts[index].featured_image} alt="" />

              </div>

              <div class="post">

              <div class="date">

                <h4>{posts[index].date}</h4>

              </div>

              <div class="title">

                <h3>{posts[index].title}</h3>

              </div>

              <div class="excerpt">

                <p>{posts[index].excerpt}</p>

              </div>

              </div>

            </div>
          </a>
        </div>
      )
    }
    
  }

render(){
    
      return(
        <Layout>
            <section id="intro" >
              <div className="grid-x">
                <div className="large-8 cell">
                  <div className="content" data-sal="slide-up" data-sal-easing="easeOutCubic">
                    <div className="sub">
                      <div className="grandworks"><h4>GrandWorks</h4></div>
                      <div className="line"></div>
                      <div className="getintouch"><a href="mailto:hello@grandworks.co"><h4>Get in touch</h4></a></div>
                    </div>
                    <div className="introducton">
                      <div className="wrap">
                      <ReactFitText compressor={0.6}>
                        <h2 id="responsive_headline">Shaping the</h2>
                      </ReactFitText>
                      

                      <div className="digital-space-wrap">
                        <img src={digitaSpace} alt="" />
                      </div>
                      <div className="grid-x">
                        <div className="large-6 cell cell1" data-sal="slide-up" data-sal-easing="easeOutCubic">
                          <h4>COMPANY</h4>
                          <p>Our team works with Spotify, OnePlus, UpCloud, IndiaStack and other great businesses from around the world. We’re working out of picturesque Portuguese villa in Goa, India.</p>
                        </div>
                        <div className="large-6 cell cell2" data-sal="slide-up" data-sal-easing="easeOutCubic">
                          <h4>EXPERTISE</h4>
                          <p>Our team members have over ten years of expertise in fields like e-commerce, user interface design, branding and mobile development.</p>
                        </div>
                      </div>

                      <a href="<?php echo site_url(); ?>/about/" className="button small hide-for-small-only" data-sal="slide-up" data-sal-easing="easeOutCubic">Learn more about GrandWorks</a>
                      <a href="<?php echo site_url(); ?>/about/" className="button small show-for-small-only">Learn more</a>

                    </div> 

                    </div>
                  </div>



                </div>
                <div className="large-4 cell">
                  <AniLink bg="#EB0029" direction="right" cover duration={0.8} to={"/case-studies/oneplus"} className="featured-work-link">
                    <div className="featured-work-wrap">
                      <div className="art-wrap">
                        <div className="phone-front"></div>
                        <div className="phone-back"></div>
                      </div>
                      <div className="featured-work-description-wrap">
                        <h4>Featured Work</h4>
                        <h3>OnePlus</h3>
                        <p>Our founder Hampus has made the official wallpapers for OnePlus smartphones since early 2015.</p>
                        <span className="button small">Know more</span>
                      </div>
                    </div>
                  </AniLink>
                </div>



              </div>
              
            </section>
            <RecentWork/>

            <section id="selected-clients" className="selected-clients-logos home">
                <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-6 cell">
                    <h4>Trusted by great companies</h4>
                  </div>
                  <div className="large-12 cell">
                    <div className="logo-wrap">
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
            </section>

            <section id="media-grid">
              <div class="grid-container">
                  <div>
                    <div class="grid-x grid-padding-x">
                      <div class="large-12 cell">
                        <h2>Newsfeed</h2>
                      </div>
                    </div>
                    {/* <div class="grid-x grid-padding-x grid" data-aos="fade-up"> */}
                    <Masonry 
                      className="grid-x grid-padding-x my-masonry-grid" 
                      columnClassName="masonry-column"
                      breakpointCols={{default: 2, 800: 2}} 
                      data-aos="fade-up"
                    >
                      {this.renderTweet(0)}
                      {this.renderPost(0)}
                      {this.renderInstagram("double",0)}
                      {this.renderInstagram("single",2)}
                      {/* {this.renderTweet(1)} */}
                      {this.renderPost(1)}
                      {this.renderInstagram("double",4)}
                      {this.renderTweet(1)}
                      {this.renderTweet(3)}
                      {this.renderInstagram("double",5)} 
                    </Masonry>
                         
                    {/* </div> */}
                  </div>
                </div>
            </section>


            <section id="services">
              <div className="grid-container" data-sal="slide-up" data-sal-easing="easeOutCubic">
                <div>

              <div className="grid-x grid-padding-x">
                <div className="large-12 cell">
                  <h2>Services</h2>
                </div>

                <div className="large-3 medium-6 cell">
                  <h4>Design</h4>
                </div>

                <div className="large-3 medium-6 cell">
                  <ul>
                    <li>User experience design</li>
                    <li>Web design</li>
                    <li>Branding</li>
                    <li>Graphic Design</li>
                    <li>Photography</li>
                  </ul>
                </div>

                <div className="large-6 cell about-text-desktop">
                  <p className="about big">
                    Our team works with Spotify, OnePlus, UpCloud, IndiaStack and other great businesses from around the world. We’re working out of picturesque Portuguese villa in Goa, India.
                  </p>
                </div>

                <div className="large-3 medium-6 cell">
                  <h4>Development</h4>
                </div>

                <div className="large-3 medium-6 cell">
                  <ul>
                    <li>Wordpress &amp; CMS</li>
                    <li>Mobile app development</li>
                    <li>E-Commerce</li>
                    <li>Web development</li>
                    <li>Front-end development</li>
                  </ul>
                </div>

                <div className="large-6 medium-12 cell">
                </div>

                <div className="large-6 cell about-text-mobile">
                  <p className="about big">
                    Our team works with Spotify, OnePlus, UpCloud, IndiaStack and other great businesses from around the world. We’re working out of picturesque Portuguese villa in Goa, India.
                  </p>
                </div>
              </div>
            </div>

            </div>
            </section>
        </Layout>
        
      )
  }
}

export default IndexPage

export const query = graphql `
query MyQuery {
  wpgraphql {
    pageBy(uri: "case-studies") {
      slug
      id
      pageId
      childPages {
        nodes {
          title
          color
          featuredImage {
            sourceUrl(size: GRAND_THUMBNAIL)
          }
        }
      }
    }
  }
}
`