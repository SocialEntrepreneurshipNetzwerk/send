const redirect = (to, code = 301) => {
  return (req, res) => {
    const host = req.get('Host');
    const path = req.params.path

    return res.redirect(code, `//${host}${to}${path ? '/' + path : ''}`)
  }
}

module.exports = (app) => {
  app.get('/mitmachen/:path?', redirect('/positionen'))
}