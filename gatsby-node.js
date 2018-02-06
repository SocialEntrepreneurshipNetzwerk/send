const path = require( 'path' );

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage, createRedirect } = boundActionCreators;

  const homePath = `/`

  createRedirect({
    fromPath: `/page2`,
    isPermanent: true,
    toPath: `/`
  })


  return graphql( `
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
            }
          }
        }
      }
    }
  ` ).then( result => {
    if ( result.errors ) {
      result.errors.forEach( e => console.error( e.toString()));
      return Promise.reject( result.errors );
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if ( node.frontmatter.path ) {
        createPage({
          path: node.frontmatter.path,
          component: node.frontmatter.templateKey ? path.resolve( `src/templates/${String( node.frontmatter.templateKey )}.js` ) : path.resolve( 'src/pages/index.js' ),
          // additional data can be passed via context
          context: {}
        });
      }
    });
  });
};
