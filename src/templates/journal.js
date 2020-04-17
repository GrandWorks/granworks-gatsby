import React, { Component } from 'react';
import Layout from '../components/layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export class Journal extends Component {
    render() {
        const journals = this.props.pageContext.journal;
        
        const firstJournal = journals[0];
        const firstPostStyle = {
            backgroundImage: `url(${journals[0].featuredImage.sourceUrl})`
        }
        const posts = journals.map((journal,index)=>{
            if(index!=0)
            {
                return (  
                        <div key={`"post-${journal.id}"`} id={`"post-${journal.id}"`} className="medium-6 cell blog">
                            <div className="wrap">
                                <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={`journal/${journal.slug}`} >
                                    <div className="image">
                                        <img src={journal.featuredImage.sourceUrl} alt={journal.title} />
                                    </div>
                                </AniLink>
                                <div className="post">
                                    <div className="date">
                                    <h4>
                                        <div className="user-avatar">
                                        <img alt="" src={journal.author.avatar.url} className="avatar avatar-75 photo" width="75" height="75" />
                                        </div>
                                        {journal.author.name}
                                        &nbsp;&bull;&nbsp;
                                        {/* {journal.date} */}
                                        {new Intl.DateTimeFormat("en-GB",{
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                        }).format(new Date(journal.date))}
                                    </h4>
                                    </div>
                                    <div className="title">
                                        <h2 className="entry-title">
                                            <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={`journal/${journal.slug}`} rel="bookmark">
                                                {journal.title}
                                            </AniLink>
                                        </h2>
                                    </div>
                                    <div className="excerpt">
                                        <span dangerouslySetInnerHTML={{__html: `
                                        ${journal.excerpt}
                                    `}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
            }
        });
        return (
            <>
            <Layout extraClassNames="" location={this.props.location}>
                <section id="archive-header" className="brick" style={firstPostStyle}>
                    <div className="grid-container">
                        <div className="wrap">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                            <h1>Journal</h1>
                            </div>

                            <div className="post large-12 cell">
                                <div className="date">
                                <h4>
                                    <div className="user-avatar">
                                    <img alt="" src={firstJournal.author.avatar.url} className="avatar avatar-75 photo" width="75" height="75" />
                                    </div>
                                    {firstJournal.author.name}
                                    &nbsp;&bull;&nbsp;
                                    {/* {firstJournal.date} */}
                                    {new Intl.DateTimeFormat("en-GB",{
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                    }).format(new Date(firstJournal.date))}
                                </h4>
                                </div>
                            </div>

                                <div className="title large-6 cell">
                                <h2 className="entry-title">
                                    <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={`journal/${firstJournal.slug}`} rel="bookmark">
                                        {firstJournal.title}
                                    </AniLink>
                                </h2>
                                </div>
                                <div className="excerpt large-6 cell">
                                <span dangerouslySetInnerHTML={{__html: `
                                    ${firstJournal.excerpt}
                                `}}></span>
                                
                                <div className="clearfix"> </div>
                                </div>
                                <div className="large-6 cell">
                                    <div className="clearfix"> </div>

                                    <AniLink bg="#4D00E3" direction="right" cover duration={0.8} to={`journal/${firstJournal.slug}`} className="button">Read More</AniLink>
                                </div>

                        </div>
                        </div>
                    </div>
                </section>
                <section id="blog-archive">
                    <div className="grid-container">
                        <div>
                            <div className="grid-x grid-padding-x">
                                {posts}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            </>
        );
    }
}

export default Journal;
