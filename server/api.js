const search = require( './search' );

const searchAction = ( req, res ) => {
  const offset = parseInt( req.query.offset, 10 ) || 0;
  const limit = parseInt( req.query.limit, 10 ) || 5;
  const q = req.query.q || '';
  const type = req.query.type || '';

  res.json( search( q, offset, limit, type ));
};

module.exports = ( app ) => {
  app.get( '/api/search', searchAction );
};
