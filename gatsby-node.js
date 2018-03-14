const path = require( 'path' );
const { createFilePath } = require( 'gatsby-source-filesystem' );

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if ( node.internal.type === 'MarkdownRemark' ) {
    const slug = createFilePath({ node, getNode, basePath: 'blog', trailingSlash: false });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  return graphql( `
    {
      allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/src/pages/"}}) {
        edges {
          node {
            fields {
               slug
             }
            frontmatter {
              templateKey
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
      createPage({
        path: node.fields.slug,
        component: node.frontmatter.templateKey ? path.resolve( `src/templates/${String( node.frontmatter.templateKey )}.js` ) : path.resolve( 'src/pages/index.js' ),
        // additional data can be passed via context
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};
