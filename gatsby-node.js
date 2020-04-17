/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({graphql, actions, reporter}) => {
    const { createPage } = actions;
    const BlogPostTemplate = path.resolve("./src/templates/post.js");
    const result = await graphql(`
        {
            wpgraphql 
            {
              posts {
                nodes {
                  author {
                    name
                    avatar {
                      url
                    }
                  }
                  id
                  slug
                  date
                  excerpt(format: RENDERED)
                  featuredImage {
                    sourceUrl(size: GRAND_THUMBNAIL)
                    id
                  }
                  title
                }
              }

                pageBy(uri: "case-studies") {
                    slug
                    id
                    pageId
                    childPages {
                      nodes {
                        title
                        slug
                        featuredImage {
                          sourceUrl(size: GRAND_THUMBNAIL)
                        }
                      }
                    }
                }
            }
        }
    `
    );

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }
    //   console.log(result);
    const Posts = result.data.wpgraphql.posts.nodes;
    const ChildCaseStudies = result.data.wpgraphql.pageBy.childPages.nodes
    const parentCaseStudy = result.data.wpgraphql.pageBy

    Posts.forEach(post=>{
        createPage({
            path: `/journal/${post.slug}`,
            component: BlogPostTemplate,
            context: {
                postId: post.id,
            }
        });
    });

    journalTemplate = path.resolve("./src/templates/journal.js");
    createPage({
      path:'/journal',
      component: journalTemplate,
      context:{
        journal: [...Posts]
      }
    })

    ParentTemplate = path.resolve("./src/templates/case-studies/case-studies.js");
    // parentCaseStudy.forEach(page=>{
        createPage({
            path: `/${parentCaseStudy.slug}`,
            component: ParentTemplate,
            context: {
                postId: parentCaseStudy.id,
                childPages:[...ChildCaseStudies]
            }
        });
    // });

    let PageTemplate = "";
    ChildCaseStudies.forEach(page=>{
    //     console.log(page.slug)
        PageTemplate = path.resolve("./src/templates/case-studies/"+page.slug+".js");
        createPage({
            path: `/case-studies/${page.slug}`,
            component: PageTemplate,
            context: {
                pageId: page.title
            }
        })
    });
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WordpressYoastMeta @dontInfer {
      property: String
      content: String
    }

    type wordpress__POST implements Node @infer {
      yoast_meta: [WordpressYoastMeta]
    }
  `
  createTypes(typeDefs)
}