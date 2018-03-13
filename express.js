const express = require( 'express' );
const path = require( 'path' );
const app = express();

// serve static assets normally
app.use( express.static( __dirname + '/public' ));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get( '*', function( request, response ) {
  response.sendFile( path.resolve( __dirname, 'index.html' ));
});

app.listen( 8080 );
console.log( 'server started on port 8080 ' );
