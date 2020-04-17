import React from 'react';
import {Helmet} from 'react-helmet';
import { graphql,useStaticQuery,Link } from 'gatsby';
import { func } from 'prop-types';

function Seo({location}){
    const query = useStaticQuery(graphql `
                            query {
                                allWordpressPage {
                                    nodes {
                                      yoast_title
                                      yoast_meta {
                                        name
                                        property
                                      }
                                      slug
                                    }
                                  }
                                  allWordpressPost {
                                    nodes {
                                      yoast_meta {
                                        content
                                        property
                                      }
                                      yoast_title
                                      slug
                                    }
                                  }
                            }
                    `);
        let allPostsPages = [...query.allWordpressPage.nodes, ...query.allWordpressPost.nodes];
        function findCurrentLocation(path)
        {
            let paths = path.split("/");
            let pathSize = paths.length;

            let finalPath = paths[pathSize - 1];

            var finalObject = {};

            allPostsPages.forEach(object=>{
                if(finalPath === object.slug)
                {
                    finalObject = {...object};
                }
            });

            return finalObject;
        }

        function generateMetaTags(object)
        {
            return(
                object.map((o,index)=>{
                    if(index==0)
                    {
                        return <meta name="robots"  content={`"${o.content}"`}/>
                    }
                    else
                    {
                        return <meta property={`"${o.property}"`}  content={`"${o.content}"`}/>
                    }
                })
            )
        }

        let locationObject = findCurrentLocation(location.pathname);
        let yoast_meta = locationObject.yoast_meta;
        let yoast_title = locationObject.yoast_title;


    return(
        <>
            {console.log(findCurrentLocation(location.pathname))}
            {/* {console.log(location)} */}
            <Helmet>
                {generateMetaTags(yoast_meta)}
                <title>{yoast_title}</title>
            </Helmet>
        </>
    )
}

export default Seo;
