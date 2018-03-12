const express = require('express')
const app = express()

const port = process.env.PORT || 8080

const redirect = (to, code = 301) => {
  return (req, res) => {
    const host = req.get('Host');
    const path = req.params.path

    return res.redirect(code, `//${host}${to}${path ? '/' + path : ''}`)
  }
}

app.use('/', express.static(`${__dirname}/public/`))
app.get('/mitmachen/:path?', redirect('/positionen'))

app.listen(port)