const { v4: uuid } = require( 'uuid' );
const fs = require( 'fs' );
const matter = require( 'gray-matter' );
const elasticlunr = require( 'elasticlunr' );

const membersFolder = `${__dirname}/../src/members/`;
const files = fs.readdirSync( membersFolder );
const articlesFolder = `${__dirname}/../src/pages/blog/`;
const articleFiles = fs.readdirSync( articlesFolder );

const memberLookup = {};
const members = files.map( f => {
  const member = matter.read( `${membersFolder}${f}` ).data;
  if ( member.link ) {
    member.domain = member.link.replace( new RegExp( '(http|https)://(www.|)' ), '' ).replace( new RegExp( '/.*$' ), '' );
  }
  member.id = uuid();
  memberLookup[ member.id ] = member;
  return member;
});

const articleLookup = {};
const articles = articleFiles.map( f => {
  const article = matter.read( `${articlesFolder}${f}` ).data;
  article.id = uuid();
  article.slug = f.replace( '.md', '' );
  articleLookup[ article.id ] = article;
  return article;
});

const membersIndex = elasticlunr( function() {
  this.addField( 'id' );
  this.addField( 'title' );
  this.addField( 'description' );
  this.addField( 'email' );
  this.addField( 'link' );
  this.addField( 'domain' );
  this.addField( 'city' );
  this.addField( 'postalCode' );
  this.addField( 'federalState' );
  this.addField( 'impactArea' );
  this.addField( 'organization' );
  this.saveDocument( true );

  members.forEach( function( doc ) {
    this.addDoc( doc );
  }, this );
});

const articlesIndex = elasticlunr( function() {
  this.addField( 'id' );
  this.addField( 'title' );
  this.addField( 'excerpt' );
  this.addField( 'date' );
  this.addField( 'category' );
  this.addField( 'domain' );
  this.saveDocument( true );

  articles.forEach( function( doc ) {
    this.addDoc( doc );
  }, this );
});


function shuffleArray( array ) {
  for ( let i = array.length - 1; i > 0; i-- ) {
    let j = Math.floor( Math.random() * ( i + 1 ));
    [ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ];
  }
}
shuffleArray( members );

articles.sort( function( a, b ) {
  let c = new Date( a.date );
  let d = new Date( b.date );
  return d - c;
});

const articlesOpts = {
  fields: {
    title: { boost: 2 },
    excerpt: { boost: 1 },
    category: { boost: 1 },
    date: { boost: 1 },
    domain: { boost: 5 }
  },
  boolean: 'AND',
  expand: true
};

const membersOpts = {
  fields: {
    title: { boost: 2 },
    description: { boost: 1 },
    email: { boost: 1 },
    link: { boost: 1 },
    domain: { boost: 5 },
    city: { boost: 1 }
  },
  boolean: 'AND',
  expand: true
};

module.exports = ( q, offset, limit, type, facets ) => {
  let opts = undefined;
  let index = undefined;
  let lookup = undefined;
  let items = undefined;

  // only membersearch has facets, article search doesn't
  if (facets){
    facets = JSON.parse( facets );
  }

  switch ( type ) {
  case 'member':
    opts = membersOpts;
    index = membersIndex;
    lookup = memberLookup;
    items = members;
    break;
  case 'article':
    opts = articlesOpts;
    index = articlesIndex;
    lookup = articleLookup;
    items = articles;
  }


  let result = { offset, limit };

  if ( q ) {
    const rows = index.search( q, opts );
    result.rows = rows.map( m => lookup[ m.ref ]);



  } else {
    result.rows = items;
  }


  for (facet in facets) {
    if ( facets[facet] ) {
      result.rows = result.rows.filter( item => {
        if ( item[facet] && item[facet].indexOf(facets[facet])>-1) {
          return item
        }
      })
    }
  }


  result.count = result.rows.length;
  result.rows = result.rows.slice(offset, offset + limit)

  return result;
};
