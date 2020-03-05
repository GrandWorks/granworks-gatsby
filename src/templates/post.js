import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const post = ({data, pageContext}) => {
    return (
        <Layout>
          <section id="single-post">
            <div className="single-header" style={{backgroundImage : 'url('+data.wpgraphql.post.featuredImage.sourceUrl+')'}} >
                <div className="grid-container">
                  <div className="wrap">
                    <div className="grid-x grid-padding-x">

                    <div className="medium-12 cell">
                      <div className="date">
                        <h4>
                          <div className="user-avatar">
                            <img alt="" src={data.wpgraphql.post.author.avatar.url} class="avatar avatar-75 photo" width="75" height="75" />
                          </div>
                          {/* Display name and date */}
                          {data.wpgraphql.post.author.name}
                          &nbsp;&bull;&nbsp;
                          {data.wpgraphql.post.date}
                        </h4>
                      </div>
                      <h1 className="entry-title">{data.wpgraphql.post.title}</h1>
                      {/* The title */}

                      <div className="excerpt" dangerouslySetInnerHTML={{__html: data.wpgraphql.post.excerpt}}>
                    
                      </div>

                    </div>

                  </div>
                </div>
              </div>


              </div>
              <div class="the-post">
                <div class="grid-container">
                <div>
                  <div class="grid-x grid-padding-x">
                    <div class="medium-12 cell" dangerouslySetInnerHTML={{__html: data.wpgraphql.post.content}}>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </section>
            
        </Layout>
    );
}

export default post;

export const query = graphql `
    query data($postId: ID!) {   
        wpgraphql {
            post(id: $postId) {
              content(format: RENDERED)
              date
              excerpt(format: RENDERED)
              featuredImage {
                sourceUrl(size: GRAND_LARGE)
              }
              author {
                firstName
                name
                avatar {
                  url
                }
              }
              title(format: RENDERED)
            }
          }
    } 
`