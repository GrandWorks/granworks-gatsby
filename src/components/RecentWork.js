import React from 'react';
import Slider from 'react-slick'
import { graphql,useStaticQuery,Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import arrowLeftTwo from '../../static/arrow-left2.svg'
import arrowRightTwo from '../../static/arrow-right2.svg'

const settings = {
    centerMode: false,
    centerPadding: '150px',
    slidesToShow: 3,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
};


const RecentWork = ({data}) => {
    const query = useStaticQuery(graphql `
        query {
        wpgraphql {
            pageBy(uri: "case-studies") {
            slug
            id
            pageId
            childPages {
                nodes {
                title
                slug
                color
                page_category
                featuredImage {
                    sourceUrl(size: GRAND_THUMBNAIL)
                }
                }
            }
            }
        }
        }
    `)
    const caseStudyChildPages = query.wpgraphql.pageBy.childPages.nodes;
    let count = 1;
    let slider = "";
    
    const caseStudies = caseStudyChildPages.map((cs)=>{
        return (
            <AniLink bg={cs.color} direction="right" cover duration={0.8} to={"/case-studies/"+cs.slug} key={count++}>
                <div className="work">
                    <img src={cs.featuredImage.sourceUrl} alt="" />
                    <h3 style={{color:cs.color}}>{cs.title}</h3>
                    {/* <h3>{cs.title}</h3> */}
                    <h4>{cs.page_category}</h4>
                </div>
            </AniLink>
        )
    })
    return (
        <section id="other-casestudies" className="homepage">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">

                <div className="medium-6 cell text">
                    <h4>Industry Leaders & Governments</h4>
                    <h2>Our Recent Work</h2>
                </div>
                <div className="medium-6 cell text navigation-container">
                    <div className="wrap">
                    <AniLink bg="#4016DA" direction="right" cover duration={0.8} to={"/case-studies/"} href="/case-studies/" className="button small blue">See all work</AniLink>
                    <a href="#" className="prev-work arrow" onClick={(e)=>{e.preventDefault(); slider.slickPrev();}}>
                        <div className="wrap">
                        <img src={arrowLeftTwo} alt="" />
                        </div>
                    </a>
                    <a href="#" className="next-work arrow" onClick={(e)=>{e.preventDefault(); slider.slickNext();}}>
                        <div className="wrap">
                        <img src={arrowRightTwo} alt="" />
                        </div>
                    </a>
                    </div>

                </div>
                <div className="medium-12 cell">
                    <div className="works-slider">
                        <Slider ref={c=>slider=c} {...settings}>
                        {caseStudies}
                        </Slider>
                    </div>
                    <a href="/case-study/" className="button small blue show-for-small-only">See all work</a>
                </div>
                </div>
            </div>
        </section>
    );
}

export default RecentWork;
