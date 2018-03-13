const search = require('./search')

const searchAction = (req, res) => {
  const offset    = parseInt(req.query.offset, 10) || 0
  const limit     = parseInt(req.query.limit, 10) || 5
  const q         = req.query.q || ''

  res.json(search(q, offset, limit))
}

module.exports = (app) => {
  app.get('/api/search', searchAction)
}